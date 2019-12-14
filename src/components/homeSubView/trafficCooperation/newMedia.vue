<template>
    <div class="wrap">
        <el-breadcrumb separator="/" style="padding-left:30px;">
            <el-breadcrumb-item>流量合作</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/media' }">我的媒体</el-breadcrumb-item>
            <el-breadcrumb-item >新建媒体</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="formWrap">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="系统平台"  required>
                    <el-button :class="{'active': ruleForm.media_type === 'H5'}" @click="ruleForm.media_type = 'H5'">H5</el-button>
                    <el-button :class="{'active': ruleForm.media_type === '公众号'}" @click="ruleForm.media_type = '公众号'">公众号</el-button>
                </el-form-item>
                <el-form-item label="媒体名称" prop="" required>
                    <el-input v-model="ruleForm.media_name" placeholder="请填写公众号名称以及（代理商简称），如「天天趣闻（推啊）」"></el-input>
                </el-form-item>
                <el-form-item label="用户偏好行业广告" prop="">
                    <el-select
                    style="width:550px;"
                    v-model="ruleForm.preference_industry_id"
                    multiple placeholder="可多选">
                        <el-option
                        v-for="(item,index) in options"
                        :key="index"
                        :label="item"
                        :value="index">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="支持下载类广告" required>
                    <el-radio-group v-model="ruleForm.support_download_ads">
                        <el-radio :label="true">支持</el-radio>
                        <el-radio :label="false">不支持</el-radio>
                    </el-radio-group>
                </el-form-item>
                <div v-show="ruleForm.media_type === '公众号'">
                    <el-form-item label="公众号名称"  required>
                        <el-input v-model="ruleForm.name_of_public_address" placeholder="请输入公众号名称及微信号，格式如：爱尚沐沐（微信号：aishangmumu）"></el-input>
                    </el-form-item>
                    <el-form-item label="公众号类型"  required>
                        <el-radio-group v-model="ruleForm.type_of_public_address">
                        <el-radio label="订阅号">订阅号</el-radio>
                        <el-radio label="服务号">服务号</el-radio>
                    </el-radio-group>
                    </el-form-item>
                    <el-form-item label="公众号主体"  required>
                        <el-radio-group v-model="ruleForm.main_body_of_public_adress">
                        <el-radio label="企业">企业</el-radio>
                        <el-radio label="个人">个人</el-radio>
                    </el-radio-group>
                    </el-form-item>
                </div>
                <el-form-item label="网站域名"  required>
                    <el-input v-model="ruleForm.website_domain_name" placeholder="请输入网站域名，如http://www.baidu.com"></el-input>
                </el-form-item>
                <el-form-item label="媒体关键词"  required>
                    <el-input v-model="ruleForm.media_keyword" placeholder="填写媒体性质或主要用途"></el-input>
                </el-form-item>
                <el-form-item label="媒体简介"  required>
                    <el-input v-model="ruleForm.description" placeholder="正确填写媒体简介能够提高广告的匹配度及收益（40个字以上）"></el-input>
                </el-form-item>
                <el-button @click="submitForm('ruleForm')">下一步</el-button>
                <!-- <el-button>保持</el-button> -->
                <el-button @click="$router.replace({path: '/media'})">取消</el-button>
            </el-form>
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
    ruleForm: object = {
        media_type: 'H5',
        preference_industry_id: [],
        support_dowload_ads: true,
    };
    options: any = this.$store.state.media.preference_industry;
    rules: object = {};
    constructor() {
        super();
    }
    created() {
        const self: any = this;
        const row: any = self.$route.params;
        console.log(row)
        if(row.id) {
            self.ruleForm = row;
            self.ruleForm.preference_industry_id = row.preference_industry_id.split(",").map((id: string) => +id);
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
        margin: 20px auto;
        padding-bottom: 90px;
        .el-button.active{
            color: #497FFF;
            border: 1px solid #497FFF;
        }
        .el-input{
            width: 550px;
        }
    }
}
</style>
