<template>
    <el-container>
        <el-header>
            <div class="header-left">
                <i class="el-icon-picture">虚拟运营系统</i>
            </div>
        </el-header>
        <el-main>
            <div class="r-register">
                <h3>注册</h3>
                <div class="demo-input-suffix">
                    学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号
                    <el-input
                        size="mini"
                        v-model="userAccount"
                        @blur="checkUserAccount()">
                    </el-input>
                    <i class="el-icon-success"  style="display:none" ref="uas"></i>
                    <i class="el-icon-error"  style="display:none" ref="uae"></i>
                </div>
                <div class="demo-input-suffix">
                    姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名
                    <el-input
                        size="mini"
                        v-model="studentName"
                        @blur="checkstudentName()">
                    </el-input>
                    <i class="el-icon-success" style="display:none" ref="uasn"></i>
                    <i class="el-icon-error" style="display:none" ref="uaen"></i>
                </div>
                <div class="demo-input-suffix">
                    学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;院
                    <el-select v-model="academy" size="mini">
                        <el-option
                          v-for="item in academys"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="demo-input-suffix" >
                    专&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;业
                    <el-select v-model="major" size="mini">
                        <el-option
                          v-for="item in majors"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="demo-input-suffix">
                    班&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;级
                    <el-input
                        size="mini"
                        v-model="studentClass"
                        @blur="checkClass()">
                    </el-input>
                    <i class="el-icon-success" style="display:none" ref="uasc"></i>
                    <i class="el-icon-error" style="display:none" ref="uaec"></i>
                </div>
                <div class="demo-input-suffix">
                    密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码
                    <el-input
                        size="mini"
                        v-model="studentPassword"
                        type="password"
                        @blur="checkstudentPassword()">
                    </el-input>
                    <i class="el-icon-success" style="display:none" ref="uasp"></i>
                    <i class="el-icon-warning" style="display:none" ref="uawp"></i>
                </div>
                <div class="demo-input-suffix">
                    确认密码
                    <el-input
                        size="mini"
                        v-model="rePassword"
                        type="password"
                        @blur="checkrePassword()">
                    </el-input>
                    <i class="el-icon-success" style="display:none" ref="uasip"></i>
                    <i class="el-icon-error" style="display:none" ref="uaeip"></i>
                </div>
                <!-- `checked` 为 true 或 false -->
                <el-checkbox v-model="checked">
                    <span @click="open">我已阅读相关服务条款</span>
                </el-checkbox>
                <el-button type="primary" id="register" class="confirm" @click="register()">确定</el-button>
            </div>
            <div class="r-login">
                <span>已有账号密码？</span>
                <router-link to="/" class="q-login">快捷登录</router-link>
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
        overflow-y: hidden;
    }
    .r-register{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
        margin-left: 400px;
        width: 550px;
        height: 450px;
        border: 1px solid #D3D3D3;
        border-radius: 10px;
        background-color: #FFFFFF;
    }
    .r-login{
        display: flex;
        justify-content: flex-end;
        width: 260px;
        height: 20px;
        /*border: 1px solid black;*/
        margin-bottom: 430px;
    }
    .q-login{
        text-decoration: none;
    }
    .el-input{
        width: 300px;
        margin-bottom: 10px;
    }
    .el-button{
        width: 300px;
    }
    .confirm{
        width: 200px;
        margin-top: 10px;
    }
    .el-icon-success,.el-icon-error,.el-icon-warning{
        margin-right: -20px;
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
        name:'Register',
        data(){
            return{
                msg:'',
                majorInfoId: 0,
                userAccount:'',
                studentName:'',
                studentClass:'',
                studentPassword:'',
                rePassword:'',
                ra:'',
                rn:'',
                rc:'',
                rp:'',
                rip:'',
                academys: [{
                  value: '选项1',
                  label: '经济管理学院'
                }, 
                {
                  value: '选项2',
                  label: '通信学院'
                }, 
                {
                  value: '选项3',
                  label: '计算机学院'
                }, 
                {
                  value: '选项4',
                  label: '光电学院'
                }, 
                {
                  value: '选项5',
                  label: '外国语学院'
                }],
                academy:'经济管理学院',
                majors: [{
                  value: '1',
                  label: '信息管理与信息系统'
                }, 
                {
                  value: '2',
                  label: '经济学'
                }, 
                {
                  value: '3',
                  label: '物流管理'
                }, 
                {
                  value: '4',
                  label: '会计学'
                }],
                major:'信息管理与信息系统',
                checked: false
            }
        },
        methods:{
            open() {
                this.$alert('<h3><center>服务条款</center></h3>这是一段内容', '', {
                    dangerouslyUseHTMLString: true,
                    confirmButtonText: '确定',
                });
            },
            checkUserAccount:function(){
                if(this.userAccount.length == 11 ){
                    this.$refs.uae.style.display = 'none';
                    this.$refs.uas.style.display = ''
                    this.ra = 1;

                }
                else if(this.userAccount.length<11)
                {
                    this.$refs.uas.style.display = 'none';
                    this.$refs.uae.style.display = ''
                    this.ra = 0;
                }
            },
            checkstudentName:function(){
                if (this.studentName == '') {
                    this.$refs.uasn.style.display = 'none';
                    this.$refs.uaen.style.display = ''
                    this.rn = 0;
                }
                else{
                    this.$refs.uaen.style.display = 'none';
                    this.$refs.uasn.style.display = ''
                    this.rn = 1;
                }
            },
            checkClass:function(){
                if (this.studentClass == '') {
                    this.$refs.uasc.style.display = 'none';
                    this.$refs.uaec.style.display = ''
                    this.rc = 0;
                }
                else{
                    this.$refs.uaec.style.display = 'none';
                    this.$refs.uasc.style.display = ''
                    this.rc = 1;
                }
            },
            checkstudentPassword:function(){
                if(/^(?![A-Za-z]+$)(?!\d+$)(?![\W_]+$)\S{6,20}$/.test(this.studentPassword)){
                    this.$refs.uawp.style.display = 'none';
                    this.$refs.uasp.style.display = ''
                    this.rp = 1;
                }
                else{
                    this.$refs.uasp.style.display = 'none';
                    this.$refs.uawp.style.display = ''
                    this.rp = 0;
                }
            },
            checkrePassword:function(){
                if(this.studentPassword == this.rePassword){
                    this.$refs.uaeip.style.display = 'none';
                    this.$refs.uasip.style.display = ''
                    this.rip = 1;
                }
                else{
                    this.$refs.uasip.style.display = 'none';
                    this.$refs.uaeip.style.display = ''
                    this.rip = 0;
                }
            },
            register:function(){
                if(this.ra == 1 && this.rn == 1 && this.rc == 1 && this.rp == 1 && this.rip == 1 && this.checked == true){
                    /*接口请求*/
                    //发送post请求
                    this.$http.post('http://118.24.113.182:8081/user/student/register',{
                            'studentAccount':this.userAccount,
                            'studentName':this.studentName,
                            'studentClass':this.studentClass,
                            'studentPassword':this.studentPassword,
                            'rePassword':this.rePassword,
                            "majorInfoId": 2},{'emulateJSON':false }//POST请求需要将emulateJSON设置为true
                        ).then(function(res){
                            console.log(res.data)
                        if (res.data.code === 500) {
                            console.log(res.data.msg);
                            alert(res.data.msg)
                        }
                        else if(res.data.code === 400){
                            console.log(res.data.msg);
                            alert(res.data.msg)
                        }
                        else if (res.data.code === 200) {
                            // alert(res.data.msg);
                            setTimeout(function(){
                                 this.$router.push('/')
                            }.bind(this),1000)
                        }
                        //alert(this.userAccount)
                    },function(){
                        console.log('请求失败处理');
                        // alert("1")
                    });  
                }
                else{
                    // console.log(res.data.msg);
                    alert("请完善信息");
                }
            }
        }

    }

</script>
