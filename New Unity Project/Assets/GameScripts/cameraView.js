#pragma strict
//	GUITouchController.js
//	A script to allow MouseUp and MouseDown on the iPhone

public var detectOnMouseOver : boolean = false;
var wasMouseDownInPrevFrame : boolean = false;
var wasMouseOverInPrevFrame : boolean = false;
var cutStartPoint : Vector3; 
var intermPoint : Vector3;
var cutEndPoint : Vector3;
var prevFrameElement : GameObject;
var object :GameObject; 
var hit : RaycastHit;

var lr: LineRenderer;
var points :int =2; 
var previousposition : Vector3;
var movepoint: Vector3;
// Use this for initialization
function Start (){
    var cube : GameObject  = GameObject.CreatePrimitive(PrimitiveType.Plane);
    cube.transform.localScale=Vector3(0.25,1.024569,.45);
    cube.transform.position = Vector3(.5, 0.5, 0);
	
	//addcomponent will add a script to that particular object
	cube.AddComponent('CutBall');
	cube.renderer.material.mainTexture =  Resources.Load("slot1", Texture2D);
	var bookcase : GameObject;
	bookcase=  Instantiate(Resources.Load("Models/BookLargeHQBlue"));
	bookcase.transform.position = Vector3(0, 0.8, 0);
	
}
function closestsphere(){
	var gos : GameObject[];
	gos = GameObject.FindGameObjectsWithTag("Sphere");
	var closest : GameObject;
	var distance = Mathf.Infinity;
	var position = transform.position;
// Iterate through them and find the closest one
	for (var go : GameObject in gos) {
	var diff = (go.transform.position - position);
	var curDistance = diff.sqrMagnitude;
	if (curDistance < distance) {
		closest = go;
		distance = curDistance;	
		}
	}
return closest; 
           

}
// Update is called once per frame
function Update () {
// this is how the ipad works we can  track what they are clicking on and how long they are clicking on it.
var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
			//only detect OnMouseDown and OnMouseUp, not also OnMouseOver and OnMouseExit to save performance (by only looking for gui elements when mouse button is pressed)
		if (Input.GetMouseButtonDown(0)){
				if(!wasMouseDownInPrevFrame){
				    if (Physics.Raycast (ray, hit, 100)) {
      					   cutStartPoint = hit.point;
      					   points=2;
      					   prevFrameElement = hit.collider.gameObject;
      					   previousposition=hit.point;
      					   wasMouseDownInPrevFrame = true;
    				}
				}
			}
		else if(wasMouseDownInPrevFrame){
			if (!Input.GetMouseButton(0)){
				prevFrameElement.SendMessage("OnMouseUp",null,SendMessageOptions.DontRequireReceiver);
				wasMouseDownInPrevFrame = false; 
				cutEndPoint=intermPoint;
			}
			else{
				  if (Physics.Raycast (ray, hit, 100)) {
				  		object= closestsphere();
      					intermPoint = hit.point; 
      					movepoint=hit.point-previousposition;
      					hit.collider.gameObject.SendMessage("OnMouseDown",movepoint,SendMessageOptions.DontRequireReceiver);
      					previousposition=hit.point;
      			}
			}
		}
		
		
		
}


function OnLevelWasLoaded(){
	
}