<template>
    <div class="accountWrap">
        <el-breadcrumb separator="/" style="padding:0 0 8px 16px;">
            <el-breadcrumb-item>账户管理</el-breadcrumb-item>
            <el-breadcrumb-item>账户信息</el-breadcrumb-item>
            <el-breadcrumb-item v-if="activeIndex === 0" :to="{ path: '/account/basic' }">基本信息</el-breadcrumb-item>
            <el-breadcrumb-item v-if="activeIndex === 1" :to="{ path: '/account/accountfinance' }">财务信息</el-breadcrumb-item>
            <el-breadcrumb-item v-if="activeIndex === 2" :to="{ path: '/account/agent' }">合同信息</el-breadcrumb-item>
        </el-breadcrumb>
        <div>
            <ul>
                <li :class="{'active': activeIndex === index ? true: false}" v-for="(item,index) in navData" :key="index" @click="changeNav(index)">
                   {{item.name}}
                </li>
            </ul>
        </div>
        <br style="clear:both">
        <router-view></router-view>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
@Component({
    components: {
    }
})
export default class Login extends Vue  {
    navData: any =  [
        {name: '基本信息' ,to:'/account/basic'},
        {name: '财务信息' ,to:'/account/accountfinance'},
        {name: '合同信息' ,to:'/account/agent'},
    ];
    activeIndex: number = 0;
    changeNav(index: number) {
        this.activeIndex = index;
        this.$router.push({path: this.navData[index].to });
    }
}
</script>
<style lang="scss">
.accountWrap{
    width: 90%;
    margin: 0 auto;
    padding: 16px 0px 40px 40px;
    background: #fff;
    ul {
        li{
            float: left;
            color: #497FFF;
            font-weight: 500;
            margin: 0 32px 0 0;
            padding: 12px 16px;
            box-sizing: border-box;
            position: relative;
            transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            cursor: pointer;
            text-decoration: none;
        }
        li.active{
            border-bottom: 2px solid #497FFF;
        }
    }
}
</style>