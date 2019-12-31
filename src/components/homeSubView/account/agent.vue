<template>
    <div class="agentWrap">
        <el-scrollbar style="height:calc(100vh - 50px);">
            <div style="padding: 30px 0;margin: -6px 40px 40px 40px;border-bottom: 1px dashed #EAEBED;margin-bottom: 22px;">
                <span class="com_name">签约主体：杭州推啊网络科技有限公司</span> <span class="status">未签署</span>
                <br/>
                <!-- <el-button >查看合同规范</el-button> -->
                <a class="btn-download" href="~@/assets/file/agent.docx" download="爱尚盟卡合作加盟商业合同.docx">下载合同</a>
                <ul class="contract-wrap-text">
                    <li>重要提示：</li>
                    <li>1.为保证结算效率，请尽快签署合同，我司收到贵司盖章的合同并确认无误后，贵司才能将收益提现；</li>
                    <li>2.签署合同请注意：</li>
                    <li>（1）按照已认证的公司名称、银行信息准确填写合同空白内容；</li>
                    <li>（2）需签署3个主体，合同一式2份，合计6份合同；</li>
                    <li>（3）请在“盖章”处盖合同专用章或公章、且需盖骑缝章（每合同共盖4个章）；</li>
                </ul>
                <div style="padding: 20px 0;">
                    <p style="margin-top: 20px;"><span class="com_name">合同邮寄地址</span></p>
                    <div style="margin-left: 30px;margin-top: 25px;">
                        <p><span class="com_name label" >地址</span> <span class="info">江苏省苏州市 吴江区云创路227号苏州大数据应用孵化基地3楼</span></p>
                        <p><span class="com_name label" >邮编</span> <span class="info">215200</span></p>
                        <p><span class="com_name label" >收件人</span> <span class="info">媒介</span></p>
                        <p><span class="com_name label" >电话</span> <span class="info">18606252587</span></p>
                    </div>
                </div>
                <div style="margin: 20px 0;position:relative;" v-show="modifyInfo === false">
                    <p><span class="com_name">合同回寄地址（以下为财务认证地址，若地址有误请及时更新）</span>
                    <el-button class="modify_btn" @click="modifyInfo = true;">修改</el-button>
                    </p>
                    <div style="margin-left: 30px;margin-top: 25px;">
                        <p><span class="com_name label" >地址</span> <span class="info">{{userInfo.agent_adress}}</span></p>
                        <p><span class="com_name label" >收件人</span> <span class="info">{{userInfo.agent_consignee}}</span></p>
                        <p><span class="com_name label" >电话</span> <span class="info">{{userInfo.agent_tel}}</span></p>
                    </div>
                </div>
                <div style="margin: 20px 0;position:relative;" v-show="modifyInfo === true">
                    <p><span class="com_name">合同回寄地址（以下为财务认证地址，若地址有误请及时更新）</span>
                    <el-button class="modify_btn" @click="updateAgentInfo">保存</el-button>
                    </p>
                    <div style="margin-left: 30px;margin-top: 25px;">
                        <p><span class="com_name label" >地址</span> <span class="info">
                            <el-input v-model="userInfo.agent_adress"></el-input></span></p>
                        <p><span class="com_name label" >收件人</span> <span class="info">
                            <el-input v-model="userInfo.agent_consignee"></el-input>
                            </span>
                        </p>
                        <p><span class="com_name label" >电话</span> <span class="info">
                            <el-input v-model="userInfo.agent_tel"></el-input>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </el-scrollbar>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import {fileByUrl} from "@/util/common/fileTransform";
// import agentSrc from "@/assets/file/agent.docx";
@Component({
    components: {
    }
})
export default class Basic extends Vue  {
    modifyInfo: boolean = false;
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
    downFile() {
        // window.open('../../assets/file/agent.docx')
    }
}
</script>
<style lang="scss" scoped>
.agentWrap{
    padding: 10px 0;
    .com_name{
        font-size: 16px;
        color: #363636;
        font-weight: bold;
    }
    .label{
        width: 100px;text-align:right;display:inline-block;
        margin-bottom: 14px;
    }
    .info{
        width: 600px;text-align:left;display:inline-block;
        padding-left: 50px;
        .el-input{
            height: 100%;
        }
    }
    .modify_btn{
        position: absolute;
        top: 32px;
        right: 30px;
        background: #fff;
        color: #497fff;
        display: inline-block;
        border: 1px solid #497fff;
        margin-top: 4px;
        margin-left: 16px;
    }
    .status{
        position: relative;
        margin-left: 20px;
        &::before{
            position: absolute;
            left: -12px;
            top: 5px;
            content: '';
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #B8E986;
           
        }
    }
    .btn-download {
        font-size: 14px;
        font-weight: normal;
        line-height: 1;
        display: inline-block;
        box-sizing: border-box;
        height: 32px;
        padding: 9px 15px;
        cursor: pointer;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-decoration: none;
        border-radius: 4px;
        background-image: none;
        touch-action: manipulation;
        background: #fff;
        display: inline-block;
        border: 1px solid #497fff;
        margin-top: 4px;
        margin-left: 16px;
        color: #497FFF;
    }
    .contract-wrap-text{
        height: 265px;
        padding: 20px 0;
        li{
            display: block;
            width: 100%;
            display: list-item;
            text-align: -webkit-match-parent;
            padding: 10px 0;
            list-style: none;
            color: rgba(0, 0, 0, 0.65);
        }
    }
}
</style>