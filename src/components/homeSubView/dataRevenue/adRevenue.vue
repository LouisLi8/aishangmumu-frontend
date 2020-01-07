<template>
    <div class="wrap">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>数据收益</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/mediadata' }">广告位数据</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="list">
            <el-scrollbar style="height: calc(100vh - 155px);">
                <el-table :data="tableData" size="small" style="text-align:center" show-summary>
                    <el-table-column prop="" label="媒体ID/名称" fixed >
                        <template slot-scope="scope">
                            {{scope.row.media_name}}
                            <div >
                                ID: {{scope.row.id}}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="" label="系统平台/创建时间" >
                        <template slot-scope="scope">
                            {{scope.row.media_type}}
                            <div >
                                {{scope.row.createdAt.split('T')[0]}}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="ad_access_pv" label="广告位访问PV" sortable></el-table-column>
                    <el-table-column prop="ad_access_uv" label="广告位访问UV" sortable></el-table-column>
                    <el-table-column prop="earnings_per_uv" label="每UV收益" sortable fixed="right"></el-table-column>
                    <el-table-column prop="estimated_revenue" label="预计收益" sortable fixed="right">
                        <template slot-scope="scope">
                            ￥ {{scope.row.estimated_revenue}}
                        </template>
                    </el-table-column>
                    <!-- <el-table-column prop="" label="每日数据" >
                        <template slot-scope="scope">
                            <div>
                                <span style="color: #4a90e2;cursor:pointer;" @click="goNewMedia(scope.row)">查看</span>
                            </div>
                        </template>
                    </el-table-column> -->
                </el-table>
            </el-scrollbar>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
@Component({
    components: {
    }
})
export default class Login extends Vue  {
    media_name: string = '';
    media_id: number|string = '';
    tableData: [] = [];
    constructor() {
        super();
    }
    created() {
        const self: any = this;
        self.tableData = [];
        self.$store.dispatch("ADPOSITION_LIST").then((res: any) => {
            res.map((media: any) => {
                if(media.revenue) self.tableData.push(media.revenue)
            })
        });
        // self.$store.dispatch("ad_revenue_list").then((res: any) => {
        //     self.tableData = res;
        // });
    }
    statusFormat(val: any) {
        console.log(val)
        // return val.
    }
    goNewMedia(row: any) {
        this.$router.push({
            name: '/newMedia',
            params: row
        })
    }
    search() {
        const self: any = this;
        // if(self.media_name || self.media_id ) {
        //     self.$store.dispatch("MEDIA_SEARCH",{
        //         id: self.media_id,
        //         media_name: self.media_name,
        //     }).then((res: any) => {
        //         self.tableData = res;
        //     });
        // } else {
        //     self.$store.dispatch("MEDIA_LIST").then((res: any) => {
        //         self.tableData = res;
        //     });
        // }
    }
    createMedia() {
        const self: any = this;
        self.$router.push({path:'/newMedia'})
    }
}
</script>
<style lang="scss" scoped>
.wrap{
    width: 100%;
    min-width: 900px;
    height: 100%;
    height: calc(100vh - 61px);
    width: calc(100vw - 5px);
    overflow-y: scroll;
    padding: 31px 40px 40px 40px;
    background: #fbfcfd;
    .list{
            margin-top: 30px;
    }
}
</style>
