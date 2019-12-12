<template>
    <div class="wrap">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>流量合作</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/media' }">我的媒体</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row style="margin: 30px 0;">
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
                <el-button size="small" @click="createMedia">新建媒体</el-button>
            </el-col>
        </el-row>
        <div class="list">
            <el-scrollbar style="height: 400px;">
                <el-table :data="tableData" size="small" style="text-align:center" >
                    <el-table-column prop="" label="媒体名称" >
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
                    <el-table-column prop="" label="状态" >
                        <template slot-scope="scope">
                            <div v-if="scope.row.status === 0">
                                <span class="yellowIcon">{{scope.row.status_name}}</span>
                            </div>
                            <div v-if="scope.row.status === 1">
                                <span class="greenIcon">{{scope.row.status_name}}</span>
                            </div>
                            <div v-if="scope.row.status === 2">
                                <span class="redIcon">{{scope.row.status_name}}</span>
                                <el-tooltip class="item" effect="dark" :content="'拒绝理由：'+scope.row.rejection_reason" placement="top">
                                    <i class="el-icon-question" style="padding-left:5px;color:lightGray;font-size:14px;"></i>
                                </el-tooltip>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="" label="操作" >
                        <template slot-scope="scope">
                            <!-- 待验证可修改 -->
                            <div v-if="scope.row.status === 0">
                                <span style="color: #4a90e2;cursor:pointer;" @click="goNewMedia(scope.row)">修改</span>
                            </div>
                            <!-- 正常可修改 -->
                            <div v-if="scope.row.status === 1">
                                <span style="color: #4a90e2;cursor:pointer;" @click="goNewMedia(scope.row)">修改</span>
                            </div>
                            <!-- 拒绝之后重新提交 -->
                            <div v-if="scope.row.status === 2">
                                <span style="color: #4a90e2;cursor:pointer;" @click="goNewMedia(scope.row)">重新提交</span>
                            </div>
                        </template>
                    </el-table-column>
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
        self.$store.dispatch("MEDIA_LIST").then((res: any) => {
            self.tableData = res;
        });
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
        if(self.media_name || self.media_id ) {
            self.$store.dispatch("MEDIA_SEARCH",{
                id: self.media_id,
                media_name: self.media_name,
            }).then((res: any) => {
                self.tableData = res;
            });
        } else {
            self.$store.dispatch("MEDIA_LIST").then((res: any) => {
                self.tableData = res;
            });
        }
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
    .card{
            background: #FFFFFF;
            padding: 30px 32px;
            overflow: hidden;
            border-radius: 4px;
            height: 140px;
            box-shadow: 0px 2px 14px 0px #f0f7ff;
    }
}
</style>
