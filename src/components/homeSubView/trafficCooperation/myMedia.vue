<template>
    <div class="wrap">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>流量合作</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/myMedia' }">我的媒体</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row style="margin-top: 10px;">
            <el-col :span="19">
                媒体名称：
                    <el-input
                        placeholder="请输入名称"
                        style="width:160px;margin-right:20px;"
                        size="small"
                        v-model="media_name">
                    </el-input>
                    媒体ID：
                    <el-input
                        placeholder="请输入ID"
                        style="width:160px;"
                        size="small"
                        v-model="media_id">
                    </el-input>
                     <el-button size="small" style="margin-left: 20px;">搜索</el-button>
            </el-col>
            <el-col :span="5" style="text-align:right;">
                <el-button size="small">新建媒体</el-button>
            </el-col>
        </el-row>
        <div class="list"></div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
@Component({
    components: {
    }
})
export default class Login extends Vue  {
    media_name: string = '';
    media_id: number|string = '';
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
