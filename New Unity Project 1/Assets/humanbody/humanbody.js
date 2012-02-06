#pragma downcast
var myTimer : float= 0.0;
private var myheart : heart;
private var bloodpressure : bloodpressure;
private var bloodflow : bloodflow;
function Start () {
  Time.timeScale = 0.7;
  myheart= GetComponent('heart');
  bloodpressure= GetComponent('bloodpressure');
  bloodflow=GetComponent('bloodflow');
}

function Update () {
	myTimer += Time.time;
	myheart.pump();
}

function setheartrate(){

}