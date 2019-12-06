<template>
    <div class="wrap">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page.currentPage"
            :page-size="page.size"
            layout="total, prev, pager, next, jumper"
            :total="page.total_items">
        </el-pagination>
    </div>
</template>
<script lang="ts">
import { Vue, Emit, Component, Prop} from 'vue-property-decorator';
@Component({
    components:{

    }
})
export default class ZDHPagination extends Vue {
    @Prop() page?: any;
    constructor() {
        super();
    }
    @Emit()
    handleSizeChange(size: number|string) {
        console.log('handleSizeChange', size);
    }
    @Emit('handleCurrentChange')
    handleCurrentChange(page: number|string) {
    	// return page;
        console.log('handleCurrentChange', page);
    }
}
</script>
