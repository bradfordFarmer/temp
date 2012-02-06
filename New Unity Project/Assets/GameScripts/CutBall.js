#pragma strict
var speed =5.0;

function OnMouseDown(movepoint : Vector3) {
		transform.localPosition.x += movepoint.x;
		transform.localPosition.z += movepoint.z; 
		if(transform.localPosition.x > 11.06307){
			transform.localPosition.x =11.06307;
		}
}

function OnMouseUp() {	
}