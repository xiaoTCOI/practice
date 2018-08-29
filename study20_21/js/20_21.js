// window.onload = function(){
	var y = 0;
	function bgPosition(){
		var div = document.getElementById('div');
		y += -480;
		div.style.backgroundPosition ="0px " + y + "px";
	}
	function startBtn(){
		setInterval('bgPosition()',200);
	}
// }