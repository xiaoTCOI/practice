
// var outBtn = document.getElementById('out-btn');
// var fontBtn = document.getElementById('font-btn');
// var emptyBtn = document.getElementById('empty-btn');
var queue = ["apple", "pear"];
function inBtn () {
	var input = document.getElementById('queue-input');
	var inputValue = input.value;
	// var inBtn = document.getElementById('in-btn');
	queue.push(inputValue);
	document.getElementById('queue-cont').innerHTML = "队列内容：" + queue.join("&lt;-");

}
function outBtn(){
	queue.shift();
	document.getElementById('queue-cont').innerHTML = "队列内容：" + queue.join("&lt;-");

}
function fontBtn(){
	alert(queue[0]);
}
function emptyBtn(){
	if(queue.length == 0){
		alert("队列为空")
	}
	else {
		alert("队列非空")
	}
}