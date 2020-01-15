<template>
    <div class="menuWrap">
        <el-menu
            style="color:#fff;"
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#40435b"
            text-color="#c7d1eb"
            :unique-opened="true"
            active-text-color="#fff">
            <div class="subMenu_homePage">
                <el-menu-item index="1" @click.native="$router.push({path: '/homePage'})">
                    <template slot="title">
                    <i class="el-icon-s-home"></i>
                    <span>首页</span>
                    </template>
                </el-menu-item>
            </div>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-document-copy"></i>
                    <span slot="title">流量合作</span>
                </template>
                <div class="subMenu">
                    <!-- 不存在pid则为代理 -->
                    <el-menu-item index="2-1" @click.native="$router.push({path: '/subUser'})" v-if="!userInfo.pid">我的子账号</el-menu-item>
                    <el-menu-item index="2-2"  @click.native="$router.push({path: '/media'})">我的媒体</el-menu-item>
                    <el-menu-item index="2-3" @click.native="$router.push({path: '/adpositiondata'})">我的广告位</el-menu-item>
                </div>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-document-copy"></i>
                    <span slot="title">数据收益</span>
                </template>
                <div class="subMenu">
                    <el-menu-item index="3-1" @click.native="$router.push({path: '/mediadata'})">媒体数据</el-menu-item>
                    <el-menu-item index="3-2" @click.native="$router.push({path: '/adRevenue'})">广告位数据</el-menu-item>
                </div>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-user"></i>
                    <span slot="title">账号管理</span>
                </template>
                <div class="subMenu">
                    <el-menu-item index="4-1" @click.native="$router.push({path: '/account/basic'})">账户信息</el-menu-item>
                    <!-- 不存在pid则为代理 -->
                    <el-menu-item index="4-2" @click.native="$router.push({path: '/finance'})"  v-if="!userInfo.pid">财务管理</el-menu-item>
                </div>
            </el-submenu>
            <!-- <el-menu-item index="5">
                <i class="el-icon-setting"></i>
                <span slot="title">技术对接</span>
            </el-menu-item> -->
            <!-- <el-menu-item index="6">
                <i class="el-icon-setting"></i>
                <span slot="title">实时资讯</span>
            </el-menu-item> -->
        </el-menu>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
// import { cacheSession } from '@/util/cacheSession';
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
        self.userInfo = await self.$storage.get('userInfo')
    }
    handleOpen(key: any, keyPath: any) {
    //   console.log(key, keyPath);
    }
    handleClose(key: any, keyPath: any) {
    //   console.log(key, keyPath);
    }
}
</script>
<style lang="scss" scoped>
.menuWrap{
    width:  190px;
    min-width: 190px;
    overflow: hidden;
    height: calc(100vh - 60px);
    background: #40435b;
    box-shadow: 0px 2px 15px 0px rgba(73, 73, 73, 0.1);
    // padding-top: 32px;
    .el-menu{
        padding-top: 32px;
        height: 100%;
        i{
            color: #c7d1eb; 
        }
        .subMenu_homePage{
            .el-menu-item.is-active{
                color: #3484f5 !important;
                i{
                    color: #3484f5 !important;
                }
                span{
                    color: #3484f5 !important;
                }
            }
        }
        .subMenu{
            li{
                user-select: none;
                background: #26293e !important;
                font-size: 12px;
                color:#c7d1eb;
                font-weight: normal;
            }
            .el-menu-item.is-active{
                color: #3484f5 !important;
            }
        }
    }
}
</style>
