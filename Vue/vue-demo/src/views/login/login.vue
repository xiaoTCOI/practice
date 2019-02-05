<template>
    <div id="login">
        <div class="login-wrap" v-show="showLogin">
            <h3>登录</h3>
            <p v-show="showTishi">{{tishi}}</p>
            <input type="text" placeholder="请输入用户名" v-model="userName">
            <input type="password" placeholder="请输入密码" v-model="password">
            <button v-on:click="login()">登录</button>
            <span v-on:click="ToRegister()">没有账号？马上注册</span>
        </div>
 
        <div class="register-wrap" v-show="showRegister">
            <h3>注册</h3>
            <p v-show="showTishi">{{tishi}}</p>
            <input type="text" placeholder="请输入用户名" v-model="newUserName">
            <input type="password" placeholder="请输入密码" v-model="newPassword">
            <button v-on:click="register()">注册</button>
            <span v-on:click="ToLogin()">已有账号？马上登录</span>
        </div>
    </div>
</template>
 
<style>
    .login-wrap{
        text-align:center;
    }
    input{
        display:block; 
        width:250px; 
        height:40px; 
        line-height:40px; 
        margin:0 auto; 
        margin-bottom: 10px; 
        outline:none; 
        border:1px solid #888; 
        padding:10px; 
        box-sizing:border-box;
    }
    p{
        color:red;
    }
    button{
        display:block; 
        width:250px; 
        height:40px; 
        line-height: 40px; 
        margin:0 auto; 
        border:none; 
        background-color:#41b883; 
        color:#fff; 
        font-size:16px; 
        margin-bottom:5px;
    }
    span{
        cursor:pointer;
    }
    span:hover{
        color:#41b883;
    }
</style>
 
<script>
    export default{
        name:'login',
        data(){
            return{
                showLogin: true,
                showRegister: false,
                showTishi: false,
                tishi: '',
                userName: '',
                password: '',
                newUserName: '',
                newPassword: ''
            }
        },
        methods:{
            ToRegister(){
                this.showRegister = true
                this.showLogin = false
            },
            ToLogin(){
                this.showRegister = false
                this.showLogin = true
            },
            login(){
                if(this.userName == "" || this.password == ""){
                    alert("请输入用户名或密码")
                }
                else{
                    let data = {
                        'userName':this.userName,
                        'password':this.password
                    }
                    /*接口请求*/
                    this.$http.post('http://rap2api.taobao.org/app/mock/118060/userLogin',data).then((res)=>{
                        console.log(res)
                        /*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*/
                        if(res.data.user == '-1'){
                            this.tishi = "该用户不存在"
                            this.showTishi = true
                        }
                        else if(res.data.user == '0'){
                            this.tishi = "密码输入错误"
                            this.showTishi = true
                        }
                        else{
                            this.tishi = "登录成功"
                            this.showTishi = true
                            setTimeout(function(){
                                this.$router.push('/home')
                            }.bind(this),1000)
                        }
                    })
                }
            },
            register(){
                if(this.newUserName == "" || this.newPassword == ""){
                    alert("请输入用户名或密码")
                }
                else{
                    let data = {
                        'userName':this.newUserName,
                        'password':this.newPassword
                    }
                    this.$http.post('http://rap2api.taobao.org/app/mock/118060/userRegister',data).then((res)=>{
                        console.log(res)
                        //alert(data.userName+data.password)
                        if(res.data.user == "ok"){
                            this.tishi = "注册成功"
                            this.showTishi = true
                            this.userName = ''
                            this.password = ''
                            /*注册成功之后再跳回登录页*/
                            setTimeout(function(){
                                this.showRegister = false
                                this.showLogin = true
                                this.showTishi = false
                            }.bind(this),2000)
                        }
                    })
                }
            }
        },
    }

</script>
