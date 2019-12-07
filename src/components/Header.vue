<template>
    <el-container>
        <div class="myHeader" >
            <el-row style="height:100%;" >
                <el-col :span="6">
                    <div class="APP_ORG_LOGO" 
                    style="width: 100%;height:59px;text-align:left;" 
                    >
                        <el-image
                            style="width: 100%;height: 59px;max-width: 200px;"
                            @click.native="goHomePage"
                            :src="logoSrc"
                            fit="cover" />
                    </div>
                </el-col>
                <el-col :span="8" :offset="10">
                    <div class="right">
                        <i class='el-icon-bell'></i>
                        <span class="down-menu-splic">|</span>
                        <el-popover
                            :visible-arrow="false"
                            placement="bottom"
                            width="320"
                            trigger="click"
                            >
                            <div class="bussiness-docking-wrap">
                                <!-- <h3>对接人： 吕仁杰</h3> -->
                                <div class="bussiness-docking-man">
                                    对接人：
                                    <span>吕仁杰</span>
                                </div>
                                <div class="bussiness-docking-content">
                                    您好，我是您的商务对接人，为您提供最优质的商业化解决方案，请与我建立联系。
                                </div>
                                <div class="bussiness-docking-code">
                                    <img src="http://yun.duiba.com.cn/tuia-media/img/mx5ew068yc.png" alt="">
                                </div>
                                <ul class="bussiness-docking-info">
                                    <li class="bussiness-docking-acticity">微信号：<span class="bussiness-wechart">weixinatongmu</span></li>
                                    <li class="bussiness-docking-acticity">手机号：<span class="bussiness-wechart">18516070553</span></li>
                                </ul>
                                <p></p>
                            </div>
                            <span slot="reference" style="cursor:pointer">商务</span>
                        </el-popover>
                        <span class="down-menu-splic" >|</span>
                        <el-popover
                            placement="bottom"
                            width="200"
                            trigger="hover"
                            >
                            <div class="personal">
                                <p><i class="el-icon-s-tools"></i>账号设置</p>
                                <p @click="quit"><i class="el-icon-remove"></i> 退出</p>
                            </div>
                            <span slot="reference" style="cursor:pointer">
                                苏州爱尚沐沐网络科技有限公司
                                <i class="el-icon-arrow-down"></i>
                            </span>
                        </el-popover>
                    </div>

                </el-col>
            </el-row>
        </div>
    </el-container>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import cacheSession from '@/util/cacheSession';
@Component({
    components: {
        // NavHeader
    }
})
export default class Login extends Vue  {
    logoSrc: any = require('@/assets/logo/logoWithName.jpg');
    constructor() {
        super();
    }
    created() {
        const self: any = this;
    }
    
   
    quit() {
        const self: any = this;
        // self.goLoginPage();
        self.$router.push({path: '/login'});
    }
}
</script>
<style lang="scss" scoped>
    .bussiness-docking-wrap{
            // position: absolute;
            width: 320px;
            height: 336px;
            // background: #fff;
            // box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.15);
            border-radius: 4px;
            // z-index: 120;
            // right: 0;
            padding: 24px 24px 0 24px;
            overflow: hidden;
            .bussiness-docking-man{
                    font-size: 14px;
                    color: #2B2D32;
                    font-weight: bold;
                    height: 20px;
                    line-height: 20px;
                    text-align: left;
            }
            .bussiness-docking-content{
                    font-size: 14px;
                    color: #25293E;
                    line-height: 20px;
                    text-align: left;
                    margin-top: 8px;
            }
            .bussiness-docking-code{
                width: 154px;
                height: 154px;
                position: absolute;
                top: 120px;
                left: 83px;
                background: #666;
                img{
                    width: 100%;
                }
            }
            .bussiness-docking-info{
                    position: relative;
                    // text-align: center; 
                    width: 100%;
                    top: 180px;
                    left: 17px;
                    li{
                        position: relative;
                        left: 27px;
                        text-align: left;
                        height: 20px;
                        line-height: 16px;
                        color: #666;
                        font-size: 14px;
                        margin-bottom: 8px;
                        width: 100%;
                    }
            }
    }
    .personal{
        p{
            padding: 5px 0;
            cursor: pointer;
        }
    }
	.myHeader {    
        width: 100%;
        background-color: #fff;
        height: 60px;
        border-bottom: 1px solid #EAEAEA;
        
        .logo {
            width: 100%;
            height: 100%;
        } 
        .right {
            text-align: right;
            padding-right: 20px;
            .down-menu-splic {
                // width:100px;
                // height: 8px;
                border-radius: 4px;
                // background: #cbcbcb;
                // border: none;
                margin: 0 10px;
            }
            
        }
		.el-row {
			height: 100%;
			.el-col {
				height: 100%;
                line-height: 60px;
				.el-image {
					height: 100%;
					img {
						height: 100%;
					}
				}

			}
		}
	}
</style>
