#pragma strict
function OnGUI () {
	GUI.Box (Rect (0,0,200,Screen.height), "My Hero");
	GUI.Box (Rect (Screen.width - 200,0,200,Screen.height), "Enemy Hero");
}