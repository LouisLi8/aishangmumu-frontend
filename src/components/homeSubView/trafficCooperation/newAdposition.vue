<template>
    <div class="wrap">
        <el-breadcrumb separator="/" style="padding-left:30px;">
            <el-breadcrumb-item>流量合作</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/media' }">我的广告位</el-breadcrumb-item>
            <el-breadcrumb-item >新建广告位</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="formWrap">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="媒体选择" required>
                   <el-select v-model="ruleForm.media_id"
                    clearable placeholder="请选择">
                        <el-option
                        v-for="item in media_list"
                        :key="item.id"
                        :label="item.media_name"
                        :value="item.id"
                        
                        >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="广告投放位置" prop="" required>
                    <!-- <img width="100%" :src="delivery_position" alt=""> -->
                    <el-upload
                        action="#"
                        list-type="picture-card"
                        :on-change="changedImage"
                        :auto-upload="false"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove"
                        >
                        <i class="el-icon-plus"></i>
                    </el-upload>
                   
                </el-form-item>
                <el-form-item label="广告位名称" prop="" required>
                    <el-input v-model="ruleForm.name" placeholder="位置描述等，例：首页-banner，限20个字"></el-input>
                </el-form-item>
                <el-form-item label="投放类型" required>
                    <el-radio-group v-model="ruleForm.delivery_type">
                        <el-radio label="手动投放">手动投放</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="素材类型"  required>
                    <el-radio-group v-model="ruleForm.material_type">
                        <el-radio label="图片">图片</el-radio>
                        <el-radio label="图文">图文</el-radio>
                        <el-radio label="文字链">文字链</el-radio>
                    </el-radio-group>
                    <div v-show="ruleForm.material_type === '图片'">
                        <div class="sucaileixing">
                            <span>可用GIF</span>
                            <el-switch
                            style="margin: 0 8px;"
                            v-model="ruleForm.support_gif"
                            active-color="#497FFF"
                            inactive-color="#a9b9c8">
                            </el-switch>
                            <span>可用视频</span>
                            <el-switch
                            style="margin: 0 8px;"
                            v-model="ruleForm.support_video"
                            active-color="#497FFF"
                            inactive-color="#a9b9c8">
                            </el-switch>
                        </div>
                    </div>
                    <div v-show="ruleForm.material_type === '图文'">
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
                    <div>
                        <p>标准</p>
                        <div style="display:flex;bakground:#F4F7F9 ">
                            <div style="width: 80px;">广告样式</div>
                            <div style="flex:1">
                                <el-radio-group v-model="specifications">
                                    <el-radio :label="key" v-for="(value, key, index) in delivery_type" :key="index">{{value.value}}</el-radio>
                                    <!-- <el-radio label="chaping_1">插屏 （尺寸：510*510）</el-radio>
                                    <el-radio label="hengfu_1">横幅 （尺寸：640*150）</el-radio>
                                    <el-radio label="xinxiliu_1">信息流2 （尺寸：225*140）</el-radio>
                                    <el-radio label="xinxiliu_2">信息流1 （尺寸700*280）</el-radio>
                                    <el-radio label="banner_1">banner （尺寸：640*280）</el-radio>
                                    <el-radio label="fubiao_1">浮标 （尺寸：150*150）</el-radio>
                                    <el-radio label="yingyongqiang_1">应用墙 （尺寸：150*150）</el-radio>
                                    <el-radio label="kaiping_1">开屏 （尺寸：750*1334）</el-radio> -->
                                </el-radio-group>
                            </div>
                        </div>
                    </div>
                </el-form-item>
                <el-form-item >
                    <el-button class="submit" @click="submitForm('ruleForm')">提交</el-button>
                    <!-- <el-button>保持</el-button> -->
                    <el-button class="themeBtn" @click="$router.replace({path: '/adpositiondata'})">取消</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="pane-right" v-if="specifications">
            <div class="title">
                广告位投放位置图例
            </div>
            <div class="preview">
                <!-- <img :src="imgList[ruleForm.specifications]" alt="" class="mobile-content"> -->
                <img :src="delivery_type[specifications].img" alt="" class="mobile-content">
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
    imgList: any = {
        chaping_1: require('../../../assets/img/chaping_1.png'),
        hengfu_1: require('../../../assets/img/hengfu_1.png'),
        xinxiliu_1: require('../../../assets/img/xinxiliu_1.png'),
        xinxiliu_2: require('../../../assets/img/xinxiliu2_1.png'),
        banner_1: require('../../../assets/img/banner_1.png'),
        fubiao_1: require('../../../assets/img/fubiao_1.png'),
        yingyongqiang_1: require('../../../assets/img/yingyongqiang_1.png'),
        kaiping_1: require('../../../assets/img/kaiping_1.png'),
    }
    specifications: any = '';
    delivery_type: any = {
        chaping_1: {
            img:require('../../../assets/img/chaping_1.png'),
            value: '插屏 （尺寸：510*510）' 
        },
        hengfu_1:{
            img: require('../../../assets/img/hengfu_1.png'),
            value: '横幅 （尺寸：640*150）'
        },
        xinxiliu_1:{
            img: require('../../../assets/img/xinxiliu_1.png'),
            value: '信息流2 （尺寸：225*140）'
        },
        xinxiliu_2:{
            img:  require('../../../assets/img/xinxiliu2_1.png'),
            value: '信息流1 （尺寸700*280）'
        },
        banner_1:{
            img: require('../../../assets/img/banner_1.png'),
            value: 'banner （尺寸：640*280）'
        },
        fubiao_1:{
            img: require('../../../assets/img/fubiao_1.png'),
            value: '浮标 （尺寸：150*150）'
        },
        yingyongqiang_1:{
            img: require('../../../assets/img/yingyongqiang_1.png'),
            value: '应用墙 （尺寸：150*150）'
        },
        kaiping_1:{
            img: require('../../../assets/img/kaiping_1.png'),
            value: '开屏 （尺寸：750*1334）'
        }
    }
    delivery_position: string = '';
    radio: any = "图片";
    gif: boolean = true;
    video: boolean = false;
    ruleForm: object = {
        media_name: '',
        material_type: '',
        name: '',
        media_type: 'H5',
        preference_industry_id: [],
        support_dowload_ads: true,
        delivery_type: '手动投放',
        support_gif: false,
        support_video: false
        // specifications: 'chaping_1',
    };
    media_list: any = [];
    options: any = this.$store.state.media.preference_industry;
    rules: object = {};
    created() {
        const self: any = this;
        const row: any = self.$route.params;
        self.$store.dispatch("MEDIA_LIST").then((res: any) => {
            self.media_list = res;
        });
        if(row.id) {
            self.ruleForm = row;
            // self.fileList.push(row.delivery_position);
            // self.ruleForm.preference_industry_id = row.preference_industry_id.split(",").map((id: string) => +id);
        }
    }

    changedImage(file: any, fileList: any) {
        if(fileList.length > 1) {
            fileList.splice(fileList.length - 2, 1);
        }
        const self: any = this;
        self.delivery_position = {file: file.raw};
    }
    handlePictureCardPreview(file: any) {
        const self: any = this;
    }
    handleRemove(file: any, fileList: any) {
        console.log(file, fileList);
    }
    async submitForm(formName: any) {
        const self: any = this;
        console.log(self.ruleForm)
        self.media_list.forEach((element: any) => {
            console.log(element)
            if(element.id === self.ruleForm.media_id) {
                self.ruleForm.media_name = element.media_name;
            }
        });
        self.ruleForm.specifications = self.delivery_type[self.specifications].value;
        const fileData: any = await self.$store.dispatch("upload", self.delivery_position);
        if(fileData.url) {
            self.ruleForm.delivery_position = fileData.url;
            const userInfo: any = await self.$storage.get("userInfo");
            if(userInfo.pid > 0) {
                self.ruleForm.pid = userInfo.pid;
            } else {
                self.ruleForm.pid = userInfo.id;
            }
            const res = await self.$store.dispatch("ADPOSITION_CREATE", self.ruleForm);
            console.log(res)
            if(res){
                self.$message.success("广告位创建成功");
                self.$router.push({path: '/adpositiondata'});
            }
        }
        
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
                .introduction{
                        position: absolute;
                        top: 526px;
                        width: 266px;
                        text-align: center;
                        color: #666666;
                        font-size: 12px;
                }
            }
    }
}
</style>
