<template>
    <el-container>
        <div class="myHeader" >
            <el-row style="height:100%;" >
                <el-col :span="6">
                    <div class="APP_ORG_LOGO" 
                    style="width: 100%;height: 59px;text-align:left;" 
                    >
                        <el-image
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
                            placement="bottom"
                            title="标题"
                            width="200"
                            trigger="click"
                            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                            <span slot="reference" style="cursor:pointer">商务</span>
                        </el-popover>
                        <span class="down-menu-splic" >|</span>
                        <el-popover
                            placement="bottom"
                            title="标题"
                            width="200"
                            trigger="click"
                            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                            <span slot="reference" style="cursor:pointer">苏州爱尚沐沐网络科技有限公司</span>
                        </el-popover>
                    </div>

                </el-col>
            </el-row>
        </div>
    </el-container>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import { cacheSession } from '@/util/cacheSession';
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
    
   
    qiut() {
        const self: any = this;
        // self.goLoginPage();
    }
}
</script>
<style lang="scss" scoped>
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
            // *{
            //     float: right;
            // }
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
