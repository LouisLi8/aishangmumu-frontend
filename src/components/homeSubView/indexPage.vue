<template>
    <div class="wrap">
        <div class="card">
            <p style="font-size: 20px;font-family: PingFangSC-Medium;color: #2b2d32;font-weight: bold;">欢迎，苏州爱尚沐沐网络科技有限公司</p>
            <p>媒体质量得分：<span style="position: relative;
    top: 1px;
    font-size: 20px !important;
    color: #497FFF !important;
    cursor: pointer;
    font-weight: bold;">1.27</span></p>
        </div>
        <div class="card">
            <el-row>
                <el-col :span="6">
                    <div style="text-align:center;border-right: 1px solid rgb(214, 214, 214);">
                        <p>昨日预计收益</p>
                        <p style="display: inline-block;height: 40px;font-weight: bold;color: #2B2D32;line-height: 40px;width: 100%;font-size: 20px;">530.01元</p>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div style="text-align:center;border-right: 1px solid rgb(214, 214, 214);">
                        <p>近7日收益</p>
                        <p style="display: inline-block;height: 40px;font-weight: bold;color: #2B2D32;line-height: 40px;width: 100%;font-size: 20px;">530.01元</p>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div style="text-align:center;border-right: 1px solid rgb(214, 214, 214);">
                        <p>本月收益</p>
                        <p style="display: inline-block;height: 40px;font-weight: bold;color: #2B2D32;line-height: 40px;width: 100%;font-size: 20px;">530.01元</p>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div style="text-align:center;">
                        <p>累计收益</p>
                        <p style="display: inline-block;height: 40px;font-weight: bold;color: #2B2D32;line-height: 40px;width: 100%;font-size: 20px;">530.01元</p>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
@Component({
    components: {
    }
})
export default class Login extends Vue  {
    constructor() {
        super();
    }
    created() {
        const self: any = this;
    }
}
</script>
<style lang="scss" scoped>
.wrap{
    width: 100%;
    min-width: 900px;
    height: 100%;
    height: calc(100vh - 61px);
    width: calc(100vw - 5px);
    overflow-y: scroll;
    padding: 31px 40px 40px 40px;
    background: #fbfcfd;
    .card{
            background: #FFFFFF;
            padding: 30px 32px;
            overflow: hidden;
            border-radius: 4px;
            height: 140px;
            box-shadow: 0px 2px 14px 0px #f0f7ff;
    }
}
</style>
