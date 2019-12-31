<template>
  <div class="login">
      <div class="content-container">
          <div class="signup">
              <div class="form">
                  <a class="aishang-logo"  href="/"></a>
                    <el-form label-position="top" ref="ruleForm"  label-width="80px">
                        <el-form-item label="账户信息" required>
                            <el-input v-model="user.email" placeholder="请输入邮箱"></el-input>
                        </el-form-item>
                        <el-form-item label="">
                            <el-input v-model="user.password" type="password" placeholder="请输入密码"></el-input>
                        </el-form-item>
                        <el-form-item label="账户类型" required>
                             <el-radio-group v-model="user.category">
                                <el-radio :label="1">直客</el-radio>
                                <el-radio :label="2">代理商</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="联系人信息" required>
                            <el-input v-model="user.company_name"  placeholder="请输入公司名称"></el-input>
                            <el-input v-model="user.real_name"  placeholder="联系人的真实姓名"></el-input>
                            <el-input v-model="user.phone"  placeholder="手机号码，真实有效"></el-input>
                        </el-form-item>
                        <el-form-item label="是否有媒介联系人" required>
                            <el-radio-group v-model="user.has_media_contact">
                                <el-radio :label="true">是</el-radio>
                                <el-radio :label="false">否</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="" >
                            <el-input 
                            v-show="user.has_media_contact"
                            v-model="user.media_contact_phone" placeholder="请输入媒介联系人手机号码"></el-input>
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
import {register} from "@/service/auth/login.service";
import validate from "@/util/reg.check";
@Component({
  components: {

  }
})
export default class Register extends Vue {
    user: object = {
        email: '963097377@qq.com',
        password: '123456',
        category: 2,
        company_name: '爱尚盟卡',
        real_name: 'louis',
        phone: '18516070553',
        has_media_contact: false,
        media_contact_phone: '',
    };
    created() {
        // this.$router.push({path: '/homePage'});
    }
    async submit() {
        const self: any = this;
        const flag_e = validate.isEmail(self.user.email);
        const flag_pa = self.user.password.length < 5;
        const flag_c = validate.isNull(self.user.company_name);
        const flag_r = validate.isNull(self.user.real_name);
        const flag_ph = validate.isPhone(self.user.phone);
        const flag_h = validate.isNull(self.user.has_media_contact);
        const flag_cp = validate.isNull(self.user.media_contact_phone);
        if(!flag_e) {
            self.$message.error('邮箱必填，且必须为真实可用邮箱');return;
        }
        if(flag_pa) {
            self.$message.error('密码不能少于6位');return;
        }
        if(flag_c) {
            self.$message.error('公司名不能为空');return;
        }
        if(flag_r) {
            self.$message.error('真实姓名不能为空');return;
        }
        if(!flag_ph) {
            self.$message.error('手机号必填,且必须为真实可用号');return;
        }
        if(flag_h) {
            self.$message.error('是否有媒介联系人必选');return;
        }

        // 有媒介联系人，校验信息
        if(self.user.has_media_contact) {
            if(!validate.isPhone(self.user.media_contact_phone)) {
                self.$message.error('媒介联系人手机号码格式错误');
                return;
            }
        }
        const res: any = await register(self.user);
        console.log(res);
        self.$message.success("注册成功,请登录！")
        self.goLogin();
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
        top: 50%;
        transform: translate(-50%, -50%);
        width: 550px;
        .signup{
            overflow: hidden;
            .aishang-logo{
                display: block;
                margin: 0 auto;
                width: 280px;
                height: 65px;
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
