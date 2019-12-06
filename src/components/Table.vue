<template>
<div class="wrap">
    <!-- <el-scrollbar> -->
        <el-table
            v-loading="tableLoading"
            empty-text="无数据"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            :data="tableData"
            size="mini"
            style="width: 100%">
            <el-table-column label="序号" type="index"></el-table-column>
            <el-table-column align="center" v-for="(prop,index) in propsData" :formatter="prop.formatter" :prop="prop.prop" :label="prop.label" :key="index"> </el-table-column>
            <el-table-column
            prop=""
            label="操作"
            align="center"
            v-if="tooltipSHow.includes('DETAIL') || tooltipSHow.includes('MODIFY') || tooltipSHow.includes('DELETE') && tooltipSHow.length > 0">
            <template slot-scope="scope">
                <el-tooltip v-if="tooltipSHow.includes('DETAIL')" effect="dark" content="查看" placement="top">
                    <i class="el-icon-document" @click="handleEvent(scope.row, 'view')"></i>
                </el-tooltip>
                <el-tooltip v-if="tooltipSHow.includes('MODIFY') && (scope.row.edit_flag === true || scope.row.edit_flag === undefined)" effect="dark" content="编辑" placement="top">
                    <i class="el-icon-edit" @click="handleEvent(scope.row, 'edit')"></i>
                </el-tooltip>
                <el-tooltip v-if="tooltipSHow.includes('DELETE') && (scope.row.delete_flag === true || scope.row.delete_flag === undefined)" effect="dark" content="删除" placement="top">
                    <i class="el-icon-delete" @click="handleEvent(scope.row, 'del')"></i>
                </el-tooltip>
            </template>
            </el-table-column>
        </el-table>
    <!-- </el-scrollbar> -->
</div>
</template>
<script lang="ts">
import { Vue, Emit, Component, Prop} from 'vue-property-decorator';
@Component({
    components:{

    }
})
export default class ZDHPagination extends Vue {
    @Prop() tableData?: any;
    @Prop() propsData?: any;
    @Prop() tooltipSHow?: any;
    tableLoading: boolean = true;
    constructor() {
        super();
    }
    mounted() {
        const self: any = this;
        let count = 0;
        const timer = setInterval(()=> {
            if(!self.tableData || self.tableData.length > 0 || count > 1 ) {
                self.tableLoading = false;
                clearInterval(timer);
            }
            count++;
        }, 200)
    }
    @Emit('handleEvent')
    handleEvent(row: any, opetator: string) {
        // console.log(row, opetator)
    }
}
</script>
<style lang="scss" scoped>
.cell{
    .el-tooltip{
        cursor: pointer;
        margin: 0 5px;
        font-size: 14px;
    }
}
</style>