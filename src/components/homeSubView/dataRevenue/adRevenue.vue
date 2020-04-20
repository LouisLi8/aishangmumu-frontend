<template>
    <div class="wrap">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>数据收益</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/mediadata' }">广告位数据</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="list">
            <el-scrollbar style="height: calc(100vh - 155px);">
                <el-table :data="tableData" size="small" style="text-align:center" :summary-method="getSummaries" show-summary>
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
                            ￥ {{countPercentage(scope.row.estimated_revenue)}}
                        </template>
                    </el-table-column>
                    <el-table-column label="每日数据" fixed="right">
                        <template slot-scope="scope">
                            <div>
                                <span style="color: #4a90e2;cursor:pointer;" @click="checkDaily(scope.row)">查看</span>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </el-scrollbar>
        </div>
          <!-- 媒体详情数据 -->
    <el-dialog :title="cRow.media_name" :visible.sync="dialogFormVisible" width="90%">
        <el-table :data="dailyData" size="small" style="text-align:center"  :summary-method="getSummaries10" show-summary>
            <el-table-column prop="" label="广告ID/名称" fixed width="150px" >
                    {{cRow.media_name}}
                    <div >
                        ID: {{cRow.id}}
                    </div>
            </el-table-column>
            <el-table-column prop="" label="时间" >
                <template slot-scope="scope">
                    {{scope.row.time}}
                    <!-- <div >
                        {{scope.row.createdAt.split('T')[0]}}
                    </div> -->
                </template>
            </el-table-column>
            <el-table-column prop="exposure" label="曝光量" sortable></el-table-column>
            <el-table-column prop="clicks" label="点击量" sortable></el-table-column>
            <el-table-column prop="click_rate" label="点击率" sortable></el-table-column>
            <el-table-column prop="cpc" label="CPC" sortable></el-table-column>
            <el-table-column prop="cpm" label="CPM" sortable></el-table-column>
            <el-table-column prop="ip_traffic" label="IP访问量" sortable></el-table-column>
            <el-table-column prop="ad_access_uv" label="广告位访问UV" sortable></el-table-column>
            <el-table-column prop="earnings_per_uv" label="每UV收益" sortable ></el-table-column>
            <el-table-column prop="estimated_revenue" label="预计收益" sortable >
                <template slot-scope="scope">
                    ￥ {{countPercentage(scope.row.estimated_revenue)}}
                </template>
            </el-table-column>
        </el-table>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogFormVisible = false">关闭</el-button>
        </div>
    </el-dialog>
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
    percentage: any = '';
    tableData: [] = [];
    dailyData: [] = [];
    cRow: any = {};
    dialogFormVisible: boolean = false;
    constructor() {
        super();
    }
    created() {
        const self: any = this;
        self.$storage.get("userInfo").then((store: any) => {
            self.percentage = store.percentage || 100
        });
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
    getSummaries(param: any) {
        const _this: any = this;
        const { columns, data } = param;
        const sums: any = [];
        columns.forEach((column: any, index: any) => {
          if (index === 0) {
            sums[index] = '合计';
            return;
          }
          if (index !== 5) {
            sums[index] = '';
            return;
          }
          const values = data.map((item: any) => Number(item[column.property]));
          if (!values.every((value: any) => isNaN(value))) {
            sums[index] = values.reduce((prev: any, curr: any) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] = (sums[index] * _this.percentage * 0.01).toFixed(2);
            sums[index] = '￥ ' + sums[index];
          } else {
            sums[index] = 'N/A';
          }
        });
        return sums ;
    }
    getSummaries10(param: any) {
        const _this: any = this;
        const { columns, data } = param;
        const sums: any = [];
        columns.forEach((column: any, index: any) => {
          if (index === 0) {
            sums[index] = '合计';
            return;
          }
          if (index < 10) {
            sums[index] = '';
            return;
          }
          const values = data.map((item: any) => Number(item[column.property]));
          if (!values.every((value: any) => isNaN(value))) {
            sums[index] = values.reduce((prev: any, curr: any) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] = (sums[index] * _this.percentage * 0.01).toFixed(2);
            sums[index] = '￥ ' + sums[index];
          } else {
            sums[index] = 'N/A';
          }
        });
        return sums ;
    }
    countPercentage(data: any) {
        data = data * this.percentage * 0.01;
        return data;
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
    async checkDaily(row: any) {
        this.cRow = row;
        this.dialogFormVisible = true;
        const params = {
            ad_id: row.id
        }
        this.dailyData = await this.$store.dispatch("AD_Daily", params)
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
