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
        <div class="ant-form-top-info">
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
    userInfo: any = {};
    mounted() {
        this.initUserInfo();
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
        }
    }
}
</style>