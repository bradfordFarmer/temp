#pragma strict

function Start () {
	
}

function Update () {

}

 function OnMouseDown(moveto: Vector3){
 	this.transform.position.y += moveto.y;
 	this.transform.position.z += moveto.z;
 }