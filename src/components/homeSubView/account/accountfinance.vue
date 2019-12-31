<template>
    <div class="basicWrap">
        <div v-show="isEdit === false">
            <div class="ant-form-top-info" style="height: 444px;">
                <el-button class="rePass" @click="isEdit = true">重新认证</el-button>
                <div class="ant-form-basic-info">财务认证信息</div>
                <ul style="padding: 20px ;" >
                    <li class="ant-form-basic-item"  v-show="finance.status_name">
                        <span class="ant-form-basic-name">审核状态</span>
                        <span class="ant-form-basic-companyname" style="color:#11b231">
                            <i class="el-icon-success"></i> {{finance.status_name}}</span>
                    </li>
                    <li class="ant-form-basic-item">
                        <span class="ant-form-basic-name">财务对象</span>
                        <span class="ant-form-basic-companyname">{{finance.object}}</span>
                    </li>
                    <li class="ant-form-basic-item">
                        <span class="ant-form-basic-name">收款公司</span>
                        <span class="ant-form-basic-companyname">{{finance.collection_company}}</span>
                    </li>
                    <li class="ant-form-basic-item">
                        <span class="ant-form-basic-name">联系地址</span>
                        <span class="ant-form-basic-companyname">{{finance.collection_company}}</span>
                    </li>
                    <li class="ant-form-basic-item">
                        <span class="ant-form-basic-name" style="margin-left: 10px;">营业执照号</span>
                        <span class="ant-form-basic-companyname">{{finance.business_license_no}}</span>
                    </li>
                    <li class="ant-form-basic-item">
                        <span class="ant-form-basic-name">营业执照</span>
                        <span class="ant-form-basic-companyname">
                            <el-image
                            fit="contain"
                            style="width: 88px;height:88px;"
                            :preview-src-list="[finance.business_license]"
                            :src="finance.business_license"></el-image>
                        </span>
                    </li>
                </ul>
            </div>
            <div class="ant-form-top-info"  style="height: 444px;">
                <div class="ant-form-basic-info">开户认证信息</div>
                <ul style="padding: 20px ;">
                    <li class="ant-form-basic-item">
                        <span class="ant-form-basic-name">开户公司</span>
                        <span class="ant-form-basic-companyname">{{finance.account_company}}</span>
                    </li>
                    <li class="ant-form-basic-item">
                        <span class="ant-form-basic-name">开户银行</span>
                        <span class="ant-form-basic-companyname">{{finance.bank_of_deposit}}</span>
                    </li>
                    <li class="ant-form-basic-item">
                        <span class="ant-form-basic-name" style="margin-left: 37px;">所在地</span>
                        <span class="ant-form-basic-companyname">{{finance.location}}</span>
                    </li>
                    <li class="ant-form-basic-item">
                        <span class="ant-form-basic-name">支行名称</span>
                        <span class="ant-form-basic-companyname">{{finance.bank_branch}}</span>
                    </li>
                    <li class="ant-form-basic-item">
                        <span class="ant-form-basic-name">银行账户</span>
                        <span class="ant-form-basic-companyname">{{finance.bank_account}}</span>
                    </li>
                    <li class="ant-form-basic-item">
                        <span class="ant-form-basic-name" style="margin-left: 10px;">开户许可证</span>
                        <span class="ant-form-basic-companyname">{{finance.licence}}</span>
                    </li>
                    <li class="ant-form-basic-item">
                        <span class="ant-form-basic-name">备注信息</span>
                        <span class="ant-form-basic-companyname">{{finance.remark}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div v-show="isEdit === true">
            <div class="ant-form-top-info" style="height: 444px;">
                <el-button class="rePass" @click="rePass">保存</el-button>
                <div class="ant-form-basic-info">财务认证信息</div>
                <ul style="padding: 20px ;" >
                    <li class="ant-form-basic-item" v-show="finance.status_name">
                        <span class="ant-form-basic-name">审核状态</span>
                        <span class="ant-form-basic-companyname" style="color:#11b231">
                            <i class="el-icon-success"></i> {{finance.status_name}}
                        </span>
                    </li>
                    <li class="ant-form-basic-item">
                        <span class="ant-form-basic-name">财务对象</span>
                        <span class="ant-form-basic-companyname">
                            <el-input v-model="finance.object"></el-input>
                        </span>
                    </li>
                    <li class="ant-form-basic-item">
                        <span class="ant-form-basic-name">收款公司</span>
                        <span class="ant-form-basic-companyname">
                            <el-input v-model="finance.collection_company"></el-input>
                        </span>
                    </li>
                    <li class="ant-form-basic-item">
                        <span class="ant-form-basic-name">联系地址</span>
                        <span class="ant-form-basic-companyname">
                            <el-input v-model="finance.collection_company"></el-input>
                        </span>
                    </li>
                    <li class="ant-form-basic-item">
                        <span class="ant-form-basic-name" style="margin-left: 10px;">营业执照号</span>
                        <span class="ant-form-basic-companyname">
                            <el-input v-model="finance.business_license_no"></el-input>
                        </span>
                    </li>
                    <li class="ant-form-basic-item">
                        <span class="ant-form-basic-name">营业执照</span>
                        <span class="ant-form-basic-companyname">
                            <el-upload
                            class="avatar-uploader"
                            :on-change="changePhoto"
                            action="#"
                            :auto-upload="false"
                            :show-file-list="false"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </span>
                    </li>
                </ul>
            </div>
            <div class="ant-form-top-info" style="height: 444px;">
                <div class="ant-form-basic-info">开户认证信息</div>
                <ul style="padding: 20px ;">
                    <li class="ant-form-basic-item">
                        <span class="ant-form-basic-name">开户公司</span>
                        <span class="ant-form-basic-companyname">
                            <el-input v-model="finance.account_company"></el-input>
                        </span>
                    </li>
                    <li class="ant-form-basic-item">
                        <span class="ant-form-basic-name">开户银行</span>
                        <span class="ant-form-basic-companyname">
                            <el-input v-model="finance.bank_of_deposit"></el-input>
                        </span>
                    </li>
                    <li class="ant-form-basic-item">
                        <span class="ant-form-basic-name" style="margin-left: 37px;">所在地</span>
                        <span class="ant-form-basic-companyname">
                            <el-input v-model="finance.location"></el-input>
                        </span>
                    </li>
                    <li class="ant-form-basic-item">
                        <span class="ant-form-basic-name">支行名称</span>
                        <span class="ant-form-basic-companyname">
                            <el-input v-model="finance.bank_branch"></el-input>
                        </span>
                    </li>
                    <li class="ant-form-basic-item">
                        <span class="ant-form-basic-name">银行账户</span>
                        <span class="ant-form-basic-companyname">
                            <el-input v-model="finance.bank_account"></el-input>
                        </span>
                    </li>
                    <li class="ant-form-basic-item">
                        <span class="ant-form-basic-name" style="margin-left: 10px;">开户许可证</span>
                        <span class="ant-form-basic-companyname">
                            <el-input v-model="finance.licence"></el-input>
                        </span>
                    </li>
                    <li class="ant-form-basic-item">
                        <span class="ant-form-basic-name">备注信息</span>
                        <span class="ant-form-basic-companyname">
                            <el-input v-model="finance.remark"></el-input>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
@Component({
    components: {
    }
})
export default class Basic extends Vue  {
    isEdit: boolean = false;
    imageUrl: string = '';
    file: any = {};
    finance: any = {
        object: '',
        collection_company: '',
        contact_address: '',
        business_license_no: '',
        business_license: '',
        account_company: '',
        bank_of_deposit: '',
        location: '',
        bank_branch: '',
        bank_account: '',
        licence: '',
        remark: '',
        status_name: ''
    };
    mounted() {
        const self: any = this;
        this.init();
    }
    changePhoto(file: any, fileList: any) {
        const self: any = this;
        self.file = {file: file.raw};
        self.imageUrl = URL.createObjectURL(file.raw);
      }
    beforeAvatarUpload(file: any) {
        const self: any = this;
        // const isJPG = file.type === 'image/jpeg';
        const isImage = ['image/jpeg', 'image/png'].includes(file.type);

        const isLimit = file.size / 1024 / 1024 < 5;
        if (!isImage) {
            self.$message.error('上传头像图片只能是 JPG、PNG 格式!');
        }
        if (!isLimit) {
            self.$message.error('上传图片大小不能超过 5MB!');
        }
        return isImage && isLimit;
    }
    async rePass() {
        const self: any = this;
        const params: any = Object.assign({}, self.finance);
        params.status = 0;
        params.status_name = '待验证';
        const isOk: any = await self.$store.dispatch("upload", self.file);
        params.business_license = isOk.url;
        const res: any = await self.$store.dispatch("finance_create", params);
        self.isEdit = false;
        console.log(res);
    }
    async init() {
        const self: any = this;
        const finance: any = await self.$store.dispatch("finance_info");
        console.log(finance)
        if(finance) {
            self.finance = finance;
        }
    }
}
</script>
<style lang="scss" scoped>
.basicWrap{
    margin: 6px 40px 80px 40px;
    box-shadow: 0px 2px 14px 0px #f0f7ff;
    .ant-form-top-info{
            position: relative;
            border-bottom: 1px dashed #EAEBED;
            padding: 32px 0;
            .rePass{
                position: absolute;
                right: 52px;
                color: #fff;
                border: 1px solid #497FFF;
                background-color: #497FFF;
                margin-top: 4px;
                font-size: 14px;
                font-weight: normal;
                line-height: 1;
                display: inline-block;
                box-sizing: border-box;
                height: 32px;
                padding: 9px 15px;
                cursor: pointer;
            }
        .ant-form-basic-info{
            height: 30px;
            line-height: 30px;
            font-size: 16px;
            color: #25293E;
            font-weight: bold;
            margin-left: 32px;
        }
        .ant-form-basic-item{
            width: 100% ;
            position: relative;
            padding: 20px 0;
            height: 48px;
            .ant-form-basic-name{
                width: 96px;
                height: 20px;
                line-height: 20px;
                color: #25293E;
                font-size: 14px;
                font-weight: bold;
                margin-left: 24px;
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
                display: inline-block;
                vertical-align: text-top;
                .el-input{
                    width: 200%;
                    height: 34px;
                }
            }
        }
    }
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #DCDFE6;
    width: 88px;
    height: 88px;
    line-height: 88px;
    text-align: center;
    border: 1px solid #DCDFE6;
  }
  .avatar {
    width: 88px;
    height: 88px;
    display: block;
  }
</style>