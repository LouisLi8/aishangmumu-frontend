<template>
    <div class="agentWrap">
        <el-scrollbar style="height:calc(100vh - 50px);">
            <div style="padding: 30px 0;margin: -6px 40px 40px 40px;border-bottom: 1px dashed #EAEBED;margin-bottom: 22px;">
                <span class="com_name">签约主体：杭州推啊网络科技有限公司</span> <span class="status">未签署</span>
                <br/> 
                <!-- <el-button >查看合同规范</el-button> -->
                <a class="btn-download" href="~@/assets/file/agent.docx" download>下载合同</a>
                <ul class="contract-wrap-text">
                    <li>重要提示：</li>
                    <li>1.为保证结算效率，请尽快签署合同，我司收到贵司盖章的合同并确认无误后，贵司才能将收益提现；</li>
                    <li>2.签署合同请注意：</li>
                    <li>（1）按照已认证的公司名称、银行信息准确填写合同空白内容；</li>
                    <li>（2）需签署3个主体，合同一式2份，合计6份合同；</li>
                    <li>（3）请在“盖章”处盖合同专用章或公章、且需盖骑缝章（每合同共盖4个章）；</li>
                </ul>
                <div style="margin: 20px 0;">
                    <p><span class="com_name">合同邮寄地址</span></p>
                    <div style="margin-left: 30px;margin-top: 25px;">
                        <p><span class="com_name label" >地址</span> <span class="info">杭州市西湖区文一西路98号数娱大厦702室</span></p>
                        <p><span class="com_name label" >邮编</span> <span class="info">310000</span></p>
                        <p><span class="com_name label" >收件人</span> <span class="info">媒介</span></p>
                        <p><span class="com_name label" >电话</span> <span class="info">0571-28258680</span></p>
                    </div>
                </div>
                <div style="margin: 20px 0;">
                    <p><span class="com_name">合同回寄地址（以下为财务认证地址，若地址有误请及时更新）</span></p>
                    <div style="margin-left: 30px;margin-top: 25px;">
                        <p><span class="com_name label" >地址</span> <span class="info">江苏省苏州市吴江区华东商业城C区6栋201</span></p>
                        <p><span class="com_name label" >收件人</span> <span class="info">苏州爱尚沐沐网络科技有限公司</span></p>
                        <p><span class="com_name label" >电话</span> <span class="info">18606252587</span></p>
                    </div>
                </div>
            </div>
        </el-scrollbar>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import {fileByUrl} from "@/util/common/fileTransform"
// import agentSrc from "@/assets/file/agent.docx";
@Component({
    components: {
    }
})
export default class Basic extends Vue  {
    get userInfo() {
        return this.$store.state.user.userInfo
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
        width: 400px;text-align:center;display:inline-block;
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
        margin: 15px 0;
        li{
            display: block;
            width: 100%;
            display: list-item;
            text-align: -webkit-match-parent;
            padding: 0;
            list-style: none;
            color: rgba(0, 0, 0, 0.65);
        }
    }
}
</style>