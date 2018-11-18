window.onload = function(){
	var userName = document.getElementById("userName");
	var password = document.getElementById("password");
	var assurePassword = document.getElementById("assurePassword");
	var teleNumber = document.getElementById("teleNumber");
	var userId = document.getElementById("userId");
	var email = document.getElementById("email");
	var birthday = document.getElementById("birthday");
	var registerBtn = document.getElementById("registerBtn");
	//检查用户名
	checkUserName = function () {  
	    if(userName.value.length<2 || userName.value.length>12){
	          alert("用户名长度在2-12字符之间");
	          userName.value = "";
	    }   
	}

	//检查密码格式
	checkPassword = function (){ 
	    var reg = /^\w{6,18}$/;
	    if(!reg.test(password.value)){
	       	alert("密码由6-18位的数字、字母、下划线组成");
	       	password.value = "";
	    }
    }

    //检查密码是否相同
    checkAssurePassword = function(){
    	if(password.value != assurePassword.value){
  			alert("两次密码输入不一致");
  			assurePassword.value = "";
 		}
    }

    //检查手机号格式
    checkTeleNumber = function () { 
		var reg = /^1[3578][0-9]{9}$/;
		if(!reg.test(teleNumber.value)){
		   alert("请输入11位有效手机号");
		   teleNumber.value = "";	
		}
	}

	//检验身份证号码是否合法
	checkId = function () {  
   // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  
    	var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
   		if(!reg.test(userId.value)) {  
       		alert("身份证输入不合法");  
       		userId.value = "";
   		}  
	}  

	//检查邮箱格式
	checkEmail = function (){
 		var regm = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;//验证Mail的正则表达式,^[a-zA-Z0-9_-]:开头必须为字母,下划线,数字,
 		if (!regm.test(email.value)){
  			alert("邮箱地址格式错误或含有非法字符!");
  			email.value = "";
 		} 
	}

	//注册按钮检查必填的选项是否填完
	registerBtn.onclick = function(){
		// alert("1")
		var input = document.getElementsByTagName("input");
		for (var i = 0 ; i < input.length - 6; i++) {
			if (input[i].value == "" || input[6].value == "") {
				alert("请完善必填选项");
				break;
			}
		}
	}
}	
