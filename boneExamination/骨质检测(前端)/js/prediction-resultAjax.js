$(function() {
      $.ajax({
        url : "",
        dataType : "json",//数据格式 
        type : "get",//请求方式
        success : function(data) {  //如果请求成功，返回数据。
          $("#class").value = data[0].value; 
          $("#advise").value = data[1].value;
        },
        error:function(request){
          alert("显示结果出错")
        },
      })
})