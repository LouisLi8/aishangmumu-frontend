<template>
    <div class="wrap">
        <el-breadcrumb separator="/" style="padding-left:30px;">
            <el-breadcrumb-item>流量合作</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/media' }">我的媒体</el-breadcrumb-item>
            <el-breadcrumb-item >网站验证</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="formWrap">
            <div class="title">验证您的网站</div>
            <div class="info">在正式合作之前，我们需要验证您对于您的网站的所有权，确保您的网站符合我们的合作规范。验证通过后，将便于我们的团队更快完成审核。</div>
            <div class="steps">
                <p>1.请下载txt文件</p>
                <p><a class="btn-download ml15" href="http://api.jmaogou.com/public/file/appKey.txt" download="">下载</a></p>
                <p>2.将其粘贴到您的网站的根目录中；</p>
                <p><a class="url" :href="tempMedia.website_domain_name + '/appKey.txt'" target="_blank">{{tempMedia.website_domain_name}}</a></p>
                <p>2.将其粘贴到您的网站的根目录中；</p>
                <p> <el-button class='submitBtn' size="small" @click="submit">提交验证</el-button> </p>
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
export default class NewMedia extends Vue  {
    tempMedia: any = this.$store.state.media.tempMedia;
    constructor() {
        super();
    }
    created() {
        const self: any = this;
    }
    async submit() {
        const self: any = this;
        self.tempMedia.preference_industry_id = self.tempMedia.preference_industry_id.join(",");
        const userInfo: any = await self.$storage.get("userInfo");
        if(userInfo.pid > 0) {
            self.tempMedia.pid = userInfo.pid;
        } else {
            self.tempMedia.pid = userInfo.id;
        }
        self.$store.dispatch("MEDIA_CREATE", self.tempMedia).then((res: any) => {
            self.$router.replace({path: '/media'});
            self.$store.commit("updateTempMedia", null);
            self.$message.success("创建成功，等待审核");
        });
    }
}
</script>
<style lang="scss" scoped>
.wrap{
    background-color: #fff;
    padding-top: 20px;
    .formWrap{
        .title {
                font-size: 20px;
                color: #2B2D32;
                height: 28px;
                line-height: 28px;
                font-weight: bold;
                text-align: center;
        }
        .info{
                width: 588px;
                height: 58px;
                line-height: 29px;
                text-align: center;
                font-size: 14px;
                color: #666;
                margin-top: 16px;
                position: relative;
                left: 50%;
                transform: translateX(-50%);
        }
        .steps{
            padding: 10px 30px;
            a.ml15{
                text-align: center;
                width: 64px;
                height: 24px;
                border: 1px solid #497FFF;
                border-radius: 4px;
                line-height: 24px;
                position: relative;
                left: 14px;
                margin-top: 2px;
                margin-bottom: 18px;
                cursor: pointer;
                display: inline-block;
                text-decoration: none;
                width: 64px;
                height: 24px;
                color: #497FFF;
            }
            a.url{
                margin-right: 10px;
                margin-left: 12px;
                color: #497FFF;
            }
        }
    }
}
</style>
