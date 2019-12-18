<template>
    <div class="wrap">
        <el-breadcrumb separator="/" style="padding-left:30px;">
            <el-breadcrumb-item>流量合作</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/media' }">我的媒体</el-breadcrumb-item>
            <el-breadcrumb-item >新建媒体</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="formWrap">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="媒体选择" required>
                   <el-select v-model="ruleForm.media_id" clearable placeholder="请选择">
                        <el-option
                        v-for="item in media_list"
                        :key="item.id"
                        :label="item.media_name"
                        :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="广告投放位置" prop="" required>
                    <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </el-form-item>
                <el-form-item label="广告位名称" prop="" required>
                    <el-input placeholder="位置描述等，例：首页-banner，限20个字"></el-input>
                </el-form-item>
                <el-form-item label="投放类型" required>
                    <el-radio-group v-model="ruleForm.support_download_ads">
                        <el-radio label="手动投放">手动投放</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="素材类型"  required>
                    <el-radio-group v-model="radio">
                        <el-radio label="图片">图片</el-radio>
                        <el-radio label="图文">图文</el-radio>
                        <el-radio label="文字链">文字链</el-radio>
                    </el-radio-group>
                    <div v-show="radio === '图片'">
                        <div class="sucaileixing">
                            <span>可用GIF</span>
                            <el-switch
                            style="margin: 0 8px;"
                            v-model="gif"
                            active-color="#497FFF"
                            inactive-color="#ff4949">
                            </el-switch>
                            <span>可用视频</span>
                            <el-switch
                            style="margin: 0 8px;"
                            v-model="video"
                            active-color="#13ce66"
                            inactive-color="#a9b9c8">
                            </el-switch>
                        </div>
                    </div>
                    <div v-show="radio === '图文'">
                        <div class="sucaileixing">
                            <span>可用GIF</span>
                            <el-switch
                            style="margin: 0 8px;"
                            v-model="gif"
                            active-color="#497FFF"
                            inactive-color="#a9b9c8">
                            </el-switch>
                        </div>
                    </div>
                </el-form-item>
                <el-form-item label="广告位规格"  required v-show="['图文','图片'].includes(radio)">
                    <el-input v-model="ruleForm.website_domain_name" placeholder="请输入网站域名，如http://www.baidu.com"></el-input>
                </el-form-item>
                <el-form-item >
                    <el-button class="submit" @click="submitForm('ruleForm')">提交</el-button>
                    <!-- <el-button>保持</el-button> -->
                    <el-button class="themeBtn" @click="$router.replace({path: '/media'})">取消</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="pane-right">
            <div class="title">
                广告位投放位置图例
            </div>
            <div class="preview">
                <img src="../../../assets/img/iphone.png" alt="" class="mobile-content">
            </div>
            <div class="introduction">

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
    radio: any = "图片";
    gif: boolean = true;
    video: boolean = false;
    ruleForm: object = {
        media_type: 'H5',
        preference_industry_id: [],
        support_dowload_ads: true,
    };
    media_list: any = [];
    options: any = this.$store.state.media.preference_industry;
    rules: object = {};
    constructor() {
        super();
    }
    created() {
        const self: any = this;
        const row: any = self.$route.params;
        self.$store.dispatch("MEDIA_LIST").then((res: any) => {
            self.media_list = res;
        });
        if(row.id) {
            self.ruleForm = row;
            // self.ruleForm.preference_industry_id = row.preference_industry_id.split(",").map((id: string) => +id);
        }
    }
    submitForm(formName: any) {
        const self: any = this;
        console.log(self.ruleForm)
        self.$store.commit("updateTempMedia", self.ruleForm);
        self.$router.push({path:'/validmedia'});
    }
}
</script>
<style lang="scss" scoped>
.wrap{
    background-color: #fff;
    padding-top: 20px;
    position: relative;
    .formWrap{
        width: 800px;
        height: 100vh;
        // margin: 20px auto;
        padding: 21px;
        .el-button.active{
            color: #497FFF;
            border: 1px solid #497FFF;
        }
        .el-input{
            width: 550px;
        }
        .sucaileixing{
                height: 60px;
                line-height: 60px;
                padding-left: 20px;
                background: #F4F7F9;
                position: relative;
        }
        .submit{
            background: #a9b9c9;
            color: #fff;
        }
    }
    .pane-right{
            position: fixed;
            width: 266px;
            height: calc(100vh - 60px);
            background: #F4F7F9;
            bottom: 0;
            right: 0;
            .title{
                color: #333333;
                font-size: 14px;
                font-weight: bold;
                height: 20px;
                line-height: 20px;
                position: absolute;
                top: 100px;
                left: 50%;
                transform: translateX(-50%)
            }
            .preview{
                position: absolute;
                width: 185px;
                height: 380px;
                background: url(//yun.tuisnake.com/mami-media/img/iphone.png) no-repeat;
                background-size: 100% 100%;
                top: 134px;
                left: 40px;
                .mobile-content {
                    position: absolute;
                    top: 53px;
                    left: 14px;
                    width: 158px;
                    height: 283px;
                }
            }
    }
}
</style>
