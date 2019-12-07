<template>
  <div class="login">
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
                            <el-input v-model="user.password"  placeholder="请输入密码"></el-input>
                        </el-form-item>
                        <el-button class="submitBtn active" @click.native="submit">提交</el-button>
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
import {login} from "@/service/auth/login.service"
@Component({
  components: {

  }
})
export default class Home extends Vue {
  user: any = {};
  created() {
    // this.$router.push({path: '/homePage'});
  }
  submit() {
    console.log('提交');
    const self: any = this;
    login(self.user);
  }
  goRegister() {
      const self: any = this;
      self.$router.push({path: '/register'});
  }
}
</script>
<style lang="scss" scoped>
.ant-input-affix-wrapper:hover .ant-input:not(.ant-input-disabled) {
    border-color: #FF7746 !important;
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
        top: 0;
        width: 550px;
        height: 932px;
        margin-left: - 225px;
        .signup{
            overflow: hidden;
            padding: 50px 0;
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
                    .take-sigin-up{
                        cursor: pointer;
                        text-decoration: underline;
                        color: #FF7746 !important;
                    }
                }
            }
        }
    }
}

</style>
