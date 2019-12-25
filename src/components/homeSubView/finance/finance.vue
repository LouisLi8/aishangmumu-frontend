<template>
    <div class="financeWrap">
        <el-breadcrumb separator="/" style="padding:0 0 8px 16px;">
            <el-breadcrumb-item>账户管理</el-breadcrumb-item>
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
        {name: '账户信息' ,to:'/account/basic'},
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
<style lang="scss" scoped>
// .financeWrap{
    
// }
</style>