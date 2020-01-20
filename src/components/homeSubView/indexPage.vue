<template>
    <div class="wrap">
        <div class="card">
            <p style="font-size: 20px;font-family: PingFangSC-Medium;color: #2b2d32;font-weight: bold;">欢迎，苏州爱尚沐沐网络科技有限公司</p>
            <p>媒体质量得分：
                <span style="position: relative;
                    top: 1px;
                    font-size: 20px !important;
                    color: #497FFF !important;
                    cursor: pointer;
                    font-weight: bold;">
                    <span v-if="userInfo.revenue">
                        {{userInfo.revenue.score ? userInfo.revenue.score : '0'}}
                    </span>
                    <span v-else>
                        0
                    </span>
                </span>
            </p>
        </div>
        <div class="card" >
            <div v-if="userInfo.pid && userInfo.pid > 0">
                <el-row >
                    <el-col :span="6">
                        <div style="text-align:center;border-right: 1px solid rgb(214, 214, 214);">
                            <p>昨日预计收益</p>
                            <p style="display: inline-block;height: 40px;font-weight: bold;color: #2B2D32;line-height: 40px;width: 100%;font-size: 20px;">
                               --</p>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div style="text-align:center;border-right: 1px solid rgb(214, 214, 214);">
                            <p>近7日收益</p>
                            <p style="display: inline-block;height: 40px;font-weight: bold;color: #2B2D32;line-height: 40px;width: 100%;font-size: 20px;">
                               --
                            </p>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div style="text-align:center;border-right: 1px solid rgb(214, 214, 214);">
                            <p>本月收益</p>
                            <p style="display: inline-block;height: 40px;font-weight: bold;color: #2B2D32;line-height: 40px;width: 100%;font-size: 20px;">
                               --
                            </p>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div style="text-align:center;">
                            <p>累计收益</p>
                            <p style="display: inline-block;height: 40px;font-weight: bold;color: #2B2D32;line-height: 40px;width: 100%;font-size: 20px;">
                               {{userInfo.revenue ? userInfo.revenue.revenue*userInfo.percentage*0.01 +' 元': '0'}}
                            </p>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div v-else>
                <div v-if="userInfo.revenue">
                    <el-row>
                        <el-col :span="6">
                            <div style="text-align:center;border-right: 1px solid rgb(214, 214, 214);">
                                <p>昨日预计收益</p>
                                <p style="display: inline-block;height: 40px;font-weight: bold;color: #2B2D32;line-height: 40px;width: 100%;font-size: 20px;">
                                    {{userInfo.revenue.last_days_revenue ? userInfo.revenue.last_days_revenue+' 元': '0'}}</p>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div style="text-align:center;border-right: 1px solid rgb(214, 214, 214);">
                                <p>近7日收益</p>
                                <p style="display: inline-block;height: 40px;font-weight: bold;color: #2B2D32;line-height: 40px;width: 100%;font-size: 20px;">
                                    {{userInfo.revenue.last_seven_days_revenue ? userInfo.revenue.last_seven_days_revenue+' 元': '0'}}
                                </p>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div style="text-align:center;border-right: 1px solid rgb(214, 214, 214);">
                                <p>本月收益</p>
                                <p style="display: inline-block;height: 40px;font-weight: bold;color: #2B2D32;line-height: 40px;width: 100%;font-size: 20px;">
                                    {{userInfo.revenue.month_revenue ? userInfo.revenue.month_revenue+' 元': '0'}}
                                </p>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div style="text-align:center;">
                                <p>累计收益</p>
                                <p style="display: inline-block;height: 40px;font-weight: bold;color: #2B2D32;line-height: 40px;width: 100%;font-size: 20px;">
                                    {{userInfo.revenue.revenue ? userInfo.revenue.revenue+' 元': '0'}}
                                </p>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div v-else>
                    <el-row >
                        <el-col :span="6">
                            <div style="text-align:center;border-right: 1px solid rgb(214, 214, 214);">
                                <p>昨日预计收益</p>
                                <p style="display: inline-block;height: 40px;font-weight: bold;color: #2B2D32;line-height: 40px;width: 100%;font-size: 20px;">
                                    0</p>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div style="text-align:center;border-right: 1px solid rgb(214, 214, 214);">
                                <p>近7日收益</p>
                                <p style="display: inline-block;height: 40px;font-weight: bold;color: #2B2D32;line-height: 40px;width: 100%;font-size: 20px;">
                                    0
                                </p>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div style="text-align:center;border-right: 1px solid rgb(214, 214, 214);">
                                <p>本月收益</p>
                                <p style="display: inline-block;height: 40px;font-weight: bold;color: #2B2D32;line-height: 40px;width: 100%;font-size: 20px;">
                                    0
                                </p>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div style="text-align:center;">
                                <p>累计收益</p>
                                <p style="display: inline-block;height: 40px;font-weight: bold;color: #2B2D32;line-height: 40px;width: 100%;font-size: 20px;">
                                    0
                                </p>
                            </div>
                        </el-col>
                    </el-row>
                </div>
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
export default class Login extends Vue  {
    userInfo: any = {};
    constructor() {
        super();
    }
    created() {
        const self: any = this;
        self.initUserInfo();
    }
    async initUserInfo() {
        const self: any = this;
        // self.userInfo = await self.$storage.get('userInfo')
        self.userInfo = await self.$store.dispatch("getUserInfo");
        await self.$storage.set('userInfo', self.userInfo)
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
