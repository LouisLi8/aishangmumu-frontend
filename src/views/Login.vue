<template>
  <div class="login" v-show="showPage">
      <div class="content-container">
          <div class="signup">
              <div class="form">
                    <a class="aishang-logo"  href="/"></a>
                    <el-form label-position="top" label-width="80px" :model="user">
                        <!-- <p>账户信息</p> -->
                        <el-form-item label="">
                            <el-input v-model="user.email" placeholder="请输入邮箱"></el-input>
                        </el-form-item>
                        <el-form-item label="">
                            <el-input v-model="user.password" type="password"  placeholder="请输入密码"></el-input>
                        </el-form-item>
                        <div class="ant-form-item-control has-success">
                            <span class="ant-form-item-children">
                                <label for="" class="ant-checkbox-wrapper">
                                    <el-checkbox v-model="saveEmail" :label="true">记住账号</el-checkbox>
                                </label>
                                <label for="" class="ant-checkbox-wrapper" style="margin-left:20px;">
                                    <span class="link take-sigin-up" @click="forget">忘记密码</span>
                                </label>
                            </span>
                        </div>
                        <el-button class="submitBtn active" @click.native="submit">登录</el-button>
                        <div class="foot">
                            <span>还没有账号？</span>
                            <span class="link take-sigin-up" @click="goRegister">马上注册</span>
                            <!-- <a href="/register" class="link take-sigin-up">马上注册</a> -->
                        </div>
                    </el-form>
              </div>
          </div>
      </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import cacheSession from '@/util/cacheSession';
import {login} from "@/service/auth/login.service";
import validate from "@/util/reg.check";
@Component({
  components: {
  }
})
export default class Home extends Vue {
  user: any = {
      email: '',
      password: ''
  };
  showPage: boolean = false;
  saveEmail: boolean = false;
  constructor(){
      super();
  }
  created() {
    this.init();
  }
  async init() {
    const self: any = this;
    const userInfo = await self.$store.dispatch("getUserInfo");
    if(userInfo && userInfo.email) {
        // 有问题,每次刷新都回回到首页
        self.$router.replace({path: '/homePage'})
    } else {
        self.showPage = true;
    }
    const email = await cacheSession.get('email');
    if(email) { self.user.email = email};
  }
   async submit() {
    const self: any = this;
    if(validate.isNull(self.user.email) || !validate.isEmail(self.user.email)) {
        self.$message.error('邮箱必填，且必须为真实可用邮箱');return;
    }
    if(validate.isNull(self.user.password)) {
        self.$message.error('密码必填');return;
    }
    const userInfo: any = await login(self.user).catch((err: any) => {});
    if(userInfo && userInfo.token) {
        await cacheSession.set("app_token", userInfo.token);
        await self.$store.commit("updateUserInfo", userInfo);
        self.$router.push({path: '/homePage'})
        if(self.saveEmail) {
            await cacheSession.set('email', self.user.email);
        } else {
            await cacheSession.remove('email');
        }
    }
  }
  goRegister() {
      const self: any = this;
      self.$router.push({path: '/register'});
  }
  forget() {
      const self: any = this;
      self.$router.push({path: '/forget'});
  }
}
</script>
<style lang="scss" scoped>
.ant-input-affix-wrapper:hover .ant-input:not(.ant-input-disabled) {
    border-color: #FF7746 !important;
}
.take-sigin-up{
    cursor: pointer;
    text-decoration: underline;
    color: #FF7746 !important;
}
.ant-form-item-control{
    margin: 26px 0 ;
    .el-checkbox__input.is-checked+.el-checkbox__label{
        color: #FF7746 !important;
    }
}
.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
    background:  #FF7746 !important;
}
.login {
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/img/login-bg.png');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    .content-container{
        position: absolute;
        left: 50%;
        width: 550px;
        height: 932px;
        margin-left: - 225px;
        .signup{
            overflow: hidden;
            padding: 50px 0;
            position: absolute;
            left: 50%;
            top: 40%;
            transform: translate(-50%, -50%);
            .aishang-logo{
                display: block;
                margin: 0 auto;
                width: 280px;
                height: 65px;
                // margin-bottom: 10px;
                background-image: url('../assets/logo/logoWithName.jpg');
                background-size: cover;
                background-position: center center;
                background-repeat: no-repeat;
            }
            .form{
                width: 550px;
                padding: 20px 50px 30px;
                background-color: #fff;
                color: #333;
                .el-form-item{
                    margin-bottom: 5px;
                }
                .submitBtn.active {
                    color: #fff;
                    border: 1px solid #FF7746;
                    background-color: #FF7746;
                    margin-top: 4px;
                }
                .submitBtn{
                    // background-color: #ccc !important;
                    // border-color: #ccc !important;
                    color: #fff;
                    border-radius: 0;
                    width: 100%;
                    height: 40px;
                    line-height: 40px;
                    padding: 0;
                    font-size: 16px;
                    transition: all 0.15s ease-in-out;
                }
                .foot{
                    text-align: center;
                    margin-top: 10px;
                    
                }
            }
        }
    }
}

</style>
