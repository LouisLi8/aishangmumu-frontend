<template>
    <div class="wrap">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>数据收益</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/mediadata' }">媒体数据</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- <el-row style="margin: 30px 0;">
            <el-col :span="19">
                媒体名称：
                    <el-input
                        placeholder="请输入名称"
                        style="width:160px;margin-right:20px;"
                        size="small"
                        v-model="media_name">
                    </el-input>
                    媒体ID：
                    <el-input
                        placeholder="请输入ID"
                        style="width:160px;"
                        size="small"
                        v-model="media_id">
                    </el-input>
                     <el-button size="small" style="margin-left: 20px;" @click="search">搜索</el-button>
            </el-col>
            <el-col :span="5" style="text-align:right;cursor:pointer;">
                <el-button class="themeBtn" size="small" @click="createMedia">新建媒体</el-button>
            </el-col>
        </el-row> -->
        <div class="list">
            <el-scrollbar style="height: calc(100vh - 155px);">
                <el-table :data="tableData" size="small" :summary-method="getSummaries" show-summary style="text-align:center" >
                    <!-- <el-table-column prop="" label="" fixed >
                        总计
                    </el-table-column> -->
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
            <el-table-column prop="" label="媒体ID/名称" fixed width="150px" >
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
                    ￥ {{scope.row.estimated_revenue}}
                </template>
            </el-table-column>
            <!-- <el-table-column prop="" label="操作" >
                <template slot-scope="scope">
                <span><el-button size="small" type="info">删除</el-button></span>
                </template>
            </el-table-column> -->
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
    tableData: [] = [];
    dailyData: [] = [];
    cRow: any = {};
    percentage: any = '';
    dialogFormVisible: boolean = false;
    constructor() {
        super();
    }
    created() {
        const self: any = this;
        self.tableData = [];
        self.$storage.get("userInfo").then((store: any) => {
            self.percentage = store.percentage || 100
        });
        self.$store.dispatch("MEDIA_LIST").then((res: any) => {
            res.map((media: any) => {
                if(media.revenue) self.tableData.push(media.revenue)
            })
        });
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
    arraySpanMethod({ row, column, rowIndex, columnIndex } : any) {
        if (rowIndex === 0) {
            if (columnIndex === 0) {
                    return [0, 0];
            } else if (columnIndex === 1) {
                    return [1, 3];
            } else if (columnIndex === 2) {
                    return [0, 0];
            } 
        }
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
            media_id: row.id
        }
        this.dailyData = await this.$store.dispatch("MEDIA_Daily", params)
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
