window.onload = function(){
	var btn1 = document.getElementById('btn1');
	var btn2 = document.getElementById('btn2');
	btn1.onclick = function(){
		alert("Hello!");
	}
	btn2.onclick = function(){
		var p = document.createElement("p");
		var text = document.createTextNode("我的爱好：短跑");
		p.appendChild(text);
		var div = document.getElementById("div");
		div.appendChild(p);
	}
}
