window.onload = function(){
	var firstNumber = document.getElementById('first-number');
	var secondNumber = document.getElementById('second-number');
	var add = document.getElementById('add-btn');
	var minus = document.getElementById('minus-btn');
	var times = document.getElementById('times-btn');
	var divide = document.getElementById('divide-btn');
	var result = document.getElementById('result');
	var value;
	add.onclick = function(){
		var firstValue = parseFloat(firstNumber.value);
	    var secondValue = parseFloat(secondNumber.value);
		value = firstValue + secondValue;
		result.innerHTML = "运算结果:" + value;
	}
	minus.onclick = function(){
		var firstValue = parseFloat(firstNumber.value);
	    var secondValue = parseFloat(secondNumber.value);
		value = firstValue - secondValue;
		result.innerHTML = "运算结果:" + value;
	}
	times.onclick = function(){
		var firstValue = parseFloat(firstNumber.value);
	    var secondValue = parseFloat(secondNumber.value);
		value = firstValue * secondValue;
		result.innerHTML = "运算结果:" + value;
	}
	divide.onclick = function(){
		var firstValue = parseFloat(firstNumber.value);
	    var secondValue = parseFloat(secondNumber.value);
	    if (secondValue != 0) {
	    	value = firstValue / secondValue;
			result.innerHTML = "运算结果:" + value;
	    }
	    else {
	    	result.innerHTML = "运算结果: 分母不符合条件";
	    	console.log('分母不能为0');
	    }
		
	}

}


	//十进制转化为二进制 
    var decNumber ;
	function dec2bin(decNumber) {
		var dec_number = document.getElementById('dec-number');
		var trans_btn = document.getElementById('trans-btn');
    	var result1 = document.getElementById('result1');
		decNumber = dec_number.value;
		var de;
		var j = 0;
		var k = 0;
		var deAll = new Array();
		var resultArr = new Array();
		if(decNumber >= 0){
			while (decNumber >= 1) {
				if (decNumber % 2 == 0) {
					decNumber = decNumber / 2;
					de = "0";
				}
				else {
					decNumber = (decNumber - 1) / 2;
					de = "1";
				}
				deAll[j] = de;
				j++;
				
			}
		}
		for (var i = deAll.length - 1; i >= 0; i--) {

			resultArr[k] = deAll[i];
			k++;
		}
		result1.innerHTML = "运算结果：" + resultArr;
	}
