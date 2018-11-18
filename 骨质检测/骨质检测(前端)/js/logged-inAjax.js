
$(function(){
    $("#startTest").click(function(){
        $.ajax({
            type:"post",
            url:"",
            dataType:"json",
            data:{
                gender:$("#sex").value,
                age:$("#age").val(),
                height:$("#height").val(),
                weight:$("#weight").val(),
                BMD:$("#bmd").val(),
                ALB:$("#alb").val(),
                Ca:$("#ca").val(),
                P:$("#p").val(),
                ALP:$("#alp").val(),
                Hb:$("#hb").val(),
                lym:$("#lym").val(),
            },
            success:function(date){
                     location.href = "prediction-result.html";
            },
            error:function(request){
                alert("出现错误！");
            },
        });
    });
});