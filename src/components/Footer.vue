<template>
    <el-container>
        <el-footer  class="bgLinear">
            <el-row style="height:100%;" >
                 <!-- <el-col :span="2" v-for="(item,index) in footerNavList" :key="index">{{item.name}}</el-col> -->
                 <el-col :span="12" v-for="(item,index) in footerNavList" :key="index">
                     <p>{{item.name}}</p>
                 </el-col>
            </el-row>
        </el-footer>
    </el-container>
</template>

<script lang="ts">
import { Component, Vue} from "vue-property-decorator";
@Component({
    components: {
    }
})
export default class Login extends Vue  {
    footerNavList: any = [{
        name: "Yougu.tech 版权所有 ICP证： 苏ICP备19047944号 ",
        path: ""
    }];
    constructor() {
        super();
    }
    get getStyle() {
        const defaultColor = this.$store.getters.themeLinear;
        return `background:${defaultColor}`;
    }
}
</script>

<style lang="scss" scoped>
.el-footer{
    width: 100%;
    min-width: minWidth;
    position:absolute;
    bottom:0;
    left:0;
    .el-row {
        height:100%;
        .el-col{
            height:100%;
            color:#fff;
            line-height: 60px;
            .el-image{
                height:100%;
                img{
                    height:100%;
                }
            }
        }
    }
}
</style>