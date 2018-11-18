window.onload = function(){
	var input = document.getElementsByTagName("input");
	var clearBtn = document.getElementById("clear");
	var startTestBtn = document.getElementById("startTest");
	// 清空数据
	clearBtn.onclick = function (){
		for (var i = 0; i < input.length-2 ; i++) {
			input[i].value = "";
		}
	}

	// 检验输入是否为数字
	check = function (e){
		var re = /^\d+(?=\.{0,1}\d+$|$)/ ;
    		if (e.value != "") { 
        		if (!re.test(e.value)) { 
            		alert("请输入正确的数字"); 
            		e.value = ""; 
        		} 
    		} 
	}

	//未登录不能测试
	startTestBtn.onclick = function () {
		alert("您还未登录，请先登录")
	}
}