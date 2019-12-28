<template>
    <div class="basicWrap">
        <div class="ant-form-top-info">
            <div class="ant-form-basic-info">财务认证信息</div>
            <ul style="padding: 20px ;">
                <li class="ant-form-basic-item">
                    <span class="ant-form-basic-name">审核状态</span>
                    <span class="ant-form-basic-companyname" style="color:#11b231">
                        <i class="el-icon-success"></i> 认证通过</span>
                </li>
                <li class="ant-form-basic-item">
                    <span class="ant-form-basic-name">财务对象</span>
                    <span class="ant-form-basic-companyname">{{userInfo.company_name}}</span>
                </li>
                <li class="ant-form-basic-item">
                    <span class="ant-form-basic-name">收款公司</span>
                    <span class="ant-form-basic-companyname">{{userInfo.company_name}}</span>
                </li>
                <li class="ant-form-basic-item">
                    <span class="ant-form-basic-name">联系地址</span>
                    <span class="ant-form-basic-companyname">{{userInfo.company_name}}</span>
                </li>
                <li class="ant-form-basic-item">
                    <span class="ant-form-basic-name" style="margin-left: 10px;">营业执照号</span>
                    <span class="ant-form-basic-companyname">{{userInfo.company_name}}</span>
                </li>
                <li class="ant-form-basic-item">
                    <span class="ant-form-basic-name">营业执照</span>
                    <span class="ant-form-basic-companyname">{{userInfo.company_name}}</span>
                </li>
            </ul>
        </div>
        <div class="ant-form-top-info">
            <div class="ant-form-basic-info">开户认证信息</div>
            <ul style="padding: 20px ;">
                <li class="ant-form-basic-item">
                    <span class="ant-form-basic-name">开户公司</span>
                    <span class="ant-form-basic-companyname">{{userInfo.company_name}}</span>
                </li>
                <li class="ant-form-basic-item">
                    <span class="ant-form-basic-name">开户银行</span>
                    <span class="ant-form-basic-companyname">{{userInfo.company_name}}</span>
                </li>
                <li class="ant-form-basic-item">
                    <span class="ant-form-basic-name" style="margin-left: 37px;">所在地</span>
                    <span class="ant-form-basic-companyname">{{userInfo.company_name}}</span>
                </li>
                <li class="ant-form-basic-item">
                    <span class="ant-form-basic-name">支行名称</span>
                    <span class="ant-form-basic-companyname">{{userInfo.company_name}}</span>
                </li>
                <li class="ant-form-basic-item">
                    <span class="ant-form-basic-name">银行账户</span>
                    <span class="ant-form-basic-companyname">{{userInfo.company_name}}</span>
                </li>
                <li class="ant-form-basic-item">
                    <span class="ant-form-basic-name" style="margin-left: 10px;">开户许可证</span>
                    <span class="ant-form-basic-companyname">{{userInfo.company_name}}</span>
                </li>
                <li class="ant-form-basic-item">
                    <span class="ant-form-basic-name">备注信息</span>
                    <span class="ant-form-basic-companyname">{{userInfo.company_name}}</span>
                </li>
            </ul>
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
    get userInfo() {
        return this.$store.state.user.userInfo
    }
}
</script>
<style lang="scss" scoped>
.basicWrap{
    margin: -6px 40px 40px 40px;
    box-shadow: 0px 2px 14px 0px #f0f7ff;
    .ant-form-top-info{
            position: relative;
            height: 354px;
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
            width: 100% ;
            position: relative;
            height: 34px;
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
            }
        }
    }
}
</style>