var btn1 = document.getElementById("btn1");
var btn = document.getElementById("btn2");
var box1 = document.getElementById("box1");
var bg = document.getElementById("bg");
var icon = document.getElementById("icon");
btn1.onclick = function(){
	bg.style.display="block";
}
icon.onclick = function(){
	bg.style.display="none";
}
btn2.onclick = function(){
	window.location.href="map_GD.html";
}