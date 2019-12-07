<template>
  <div class="login">
      <div class="content-container">
          <div class="signup">
              <div class="form">
                  <a class="aishang-logo"  href="/"></a>
                    <el-form label-position="top" label-width="80px" :model="user">
                        <!-- <p>账户信息</p> -->
                        <el-form-item label="账户信息">
                            <el-input v-model="user.email" placeholder="请输入邮箱"></el-input>
                        </el-form-item>
                        <el-form-item label="">
                            <el-input v-model="user.password"  placeholder="请输入密码"></el-input>
                        </el-form-item>
                        <el-form-item label="账户类型">
                            <el-radio v-model="user.category" label="1">直客</el-radio>
                            <el-radio v-model="user.category" label="2">代理商</el-radio>
                        </el-form-item>
                        <el-form-item label="联系人信息">
                            <el-input v-model="user.company_name"  placeholder="请输入公司名称"></el-input>
                            <el-input v-model="user.real_name"  placeholder="联系人的真实姓名"></el-input>
                            <el-input v-model="user.phone"  placeholder="手机号码，真实有效"></el-input>
                        </el-form-item>
                        <el-form-item label="是否有媒介联系人">
                            <el-radio v-model="user.has_media_contact" :label="true">是</el-radio>
                            <el-radio v-model="user.has_media_contact" :label="false">否</el-radio>
                        </el-form-item>
                        <el-button class="submitBtn active" @click.native="submit">提交</el-button>
                        <div class="foot">
                            <span>已有账户？</span>
                            <span class="link take-sigin-up" @click="goLogin">马上登录</span>
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
      console.log('提交')
  }
  goLogin() {
      const self: any = this;
      self.$router.push({path: '/login'});
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
                    margin-top: 10px;
                    text-align: center;
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
