<template>
    <div class="basicWrap">
        <div class="ant-form-top-info">
            <div class="ant-form-basic-info">基本信息</div>
            <ul>
                <li class="ant-form-basic-item">
                    <span class="ant-form-basic-name">公司</span>
                    <span class="ant-form-basic-companyname">{{userInfo.company_name}}</span>
                </li>
                <li class="ant-form-basic-item">
                    <span class="ant-form-basic-name-person">联系人</span>
                    <span class="ant-form-basic-companyname">{{userInfo.real_name}}</span>
                </li>
            </ul>
        </div>
        <div class="ant-form-top-info" style="height: 290px;">
            <div class="ant-form-basic-info">安全信息</div>
            <ul>
                <li class="ant-form-basic-item">
                    <span class="ant-form-basic-name">电子邮箱</span>
                    <span class="ant-form-basic-companyname">{{userInfo.email}}</span>
                </li>
                <li class="ant-form-basic-item">
                    <span class="ant-form-basic-name">联系电话</span>
                    <span class="ant-form-basic-companyname">{{userInfo.phone}}</span>
                </li>
                <li class="ant-form-basic-item">
                    <span class="ant-form-basic-name" style="margin-left:140px;">密码</span>
                    <span class="ant-form-basic-companyname" style="color:#53C419">已设置</span>
                    <span class="modifyBtn" @click="dialogVisible = true">修改</span>
                </li>
            </ul>
        </div>
        <el-dialog
        title="修改密码"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <el-form label-position="top">
            <el-form-item label="请输入旧密码">
                <el-input v-model="passwordInfo.old_pass" type="password"></el-input>
            </el-form-item>
            <el-form-item label="请输入新密码">
                <el-input v-model="passwordInfo.password" type="password"></el-input>
            </el-form-item>
            <el-form-item label="请确认新密码">
                <el-input v-model="passwordInfo.confirm_password" type="password"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="makeSureToReset">确 定</el-button>
        </span>
        </el-dialog>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
@Component({
    components: {
    }
})
export default class Basic extends Vue  {
    userInfo: any = {};
    passwordInfo: any = {
        old_pass: '',
        password: '',
        confirm_password: ''
    };
    dialogVisible: boolean = false;
    mounted() {
        this.initUserInfo();
    }
    handleClose() {
        const self: any =  this;
        self.passwordInfo = {
            old_pass: '',
            password: '',
            confirm_password: ''
        }
    }
    async makeSureToReset() {
        const self: any =  this;
        const res:any = await self.$store.dispatch("resetPassword", self.passwordInfo);
        self.dialogVisible = false;
        // console.log(res)
        if(res) {
            self.$message.success("密码修改成功,请重新登录");
            self.passwordInfo = {
                old_pass: '',
                password: '',
                confirm_password: ''
            }
            self.$router.replace({name: 'login'})
        }
    }
    async initUserInfo() {
        const self: any = this;
        self.userInfo = await self.$storage.get('userInfo')
    }
    async updateAgentInfo() {
        const self: any = this;
        self.modifyInfo = false;
        const res = await self.$store.dispatch('updateAgentInfo', {
            agent_adress: self.userInfo.agent_adress,
            agent_consignee:  self.userInfo.agent_consignee,
            agent_tel:  self.userInfo.agent_tel,
        });
        if(res) {
            self.userInfo = res;
        }
    }
}
</script>
<style lang="scss" scoped>
.basicWrap{
        margin: 6px 40px 40px 40px;
    box-shadow: 0px 2px 14px 0px #f0f7ff;
    .ant-form-top-info{
            position: relative;
            height: 254px;
            border-bottom: 1px dashed #EAEBED;
            padding-top: 32px;
        .ant-form-basic-info{
            height: 30px;
            line-height: 30px;
            font-size: 16px;
            color: #25293E;
            font-weight: bold;
            margin-left: 32px;
        }
        .ant-form-basic-item{
            position: relative;
            margin-top: 20px;
            width: 100%;
            .ant-form-basic-name{
                font-size: 14px;
                color: #9EA4B6;
                margin-left: 112px;
            }
            .ant-form-basic-name-person {
                    font-size: 14px;
                    color: #9EA4B6;
                    margin-left: 98px;
            }
            .ant-form-basic-companyname{
                font-size: 14px;
                color: #25293E;
                margin-left: 120px;
            }
            .modifyBtn{
                position: absolute;
                width: 88px;
                height: 30px;
                line-height: 30px;
                border-radius: 2px;
                background: #E4E9ED;
                text-align: center;
                color: #666;
                font-size: 14px;
                cursor: pointer;
                right: 28px;
            }
        }
    }
}
</style>