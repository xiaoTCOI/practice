<template>
    <el-container>
        <el-header>
            <div class="header-left">
                <i class="el-icon-picture">虚拟运营系统</i>
            </div>
            <div class="header-right">
                <a href="#">English</a>
                <span>|</span>
                <a href="#">中文版</a>
            </div>
        </el-header>
        <el-main>
            <div class="main-left">
                <div class="main-left-content"><span>gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg</span></div>
            </div>
            <div class="main-right">
                <el-input placeholder="学号/用户名" v-model="userAccount" clearable></el-input>
                <el-input type="password" placeholder="请输入密码" v-model="userPassword" clearable></el-input>
                <!-- <a href="#" class="register" @click="$goRoute('/register')">新用户注册</a> -->
                <!-- <a href="#" class="register" @click="zc('/register')">新用户注册</a> -->
                <router-link to="/register" class="register">新用户注册</router-link>
                <el-button type="primary" id="login" v-on:click="login()">登录</el-button>
            </div>
        </el-main>
        <el-footer>
            <span>Copyright &copy; 2011-2018年重庆优霓维斯科技有限公司.All rights Reserved</span>
        </el-footer>
    </el-container>
</template>
 
<style>
    .el-container{
        border: 1px solid #CBCBCB;
        height: 610px;
    }
    .el-header{
        display: flex;
        align-items: center;
        /*flex-direction: column;*/
        justify-content: space-between;
        background-color: #FFFFFF;
        border-bottom: 1px solid #CBCBCB;
    }
    .el-main{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F1F2F2;
        border-bottom: 1px solid #CBCBCB;
    }
    .main-left{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 600px;
        height: 400px;
        /*border: 1px solid black;*/
    }
    .main-left-content{
        width: 300px;
        height: 240px;
        /*border: 1px solid black;*/
        word-wrap:break-word;
    }
    .main-right{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
        width: 450px;
        height: 300px;
        border: 1px solid #D3D3D3;
        border-radius: 10px;
        background-color: #FFFFFF;
    }
    .el-input{
        width: 300px;
        margin-bottom: 10px;
    }
    .register{
        margin-right: 80px;
        align-self:flex-end;
        margin-bottom: 10px;
    }
    .el-button{
        width: 300px;
    }
    .el-footer{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
    }
</style>
 
<script>

    export default{
        name:'Login',
        data(){
            return {
                userAccount:'',
                userPassword:''
            }
        },
        methods:{
            login(){
                if(this.userAccount == "" || this.userPassword == ""){
                    alert("请输入用户名或密码")
                }
                else{
                    // let data = {
                    //     'userAccount':this.userAccount,
                    //     'userPassword':this.userPassword
                    // }
                    /*接口请求*/
                    //发送post请求
                    this.$http.post('http://118.24.113.182:8081/user/student/login',{
                        'userAccount':this.userAccount,
                        'userPassword':this.userPassword
                    },{'emulateJSON':true }).then(function(res){
                        // console.log(res.data);
                        if (res.data.code === 401) {
                            alert(res.data.msg)
                        }
                        else if(res.data.code === 400){
                            alert(res.data.msg)
                        }
                        else if (res.data.code === 500) {
                            console.log(res.data);
                            alert(res.data.msg)
                        }
                        else if(res.data.code === 200) {
                            setTimeout(function(){
                                this.$router.push('/home')
                            }.bind(this),1000)
                        }  
                        // alert("1") 
                    },function(){
                        console.log('请求失败处理');
                        // alert("1")
                    });  
                }
            }
            // zc(index){
            //     this.$router.push(index);
            // }

        }

    }

</script>
