<template>
    <div class="wrap">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>流量合作</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/media' }">我的子账号</el-breadcrumb-item>
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
                <el-button class="themeBtn" size="small" @click="createSubUser">邀请子账号</el-button>
            </el-col>
        </el-row>
        <div class="list">
            <el-scrollbar style="height: 400px;">
                <el-table :data="tableData" size="small" style="text-align:center" >
                    <el-table-column prop="" label="用户ID/创建时间" >
                        <template slot-scope="scope">
                            {{scope.row.id}}
                            <div>
                                {{scope.row.createdAt.split('T')[0]}}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="" label="用户姓名/邮箱" >
                        <template slot-scope="scope">
                            {{scope.row.real_name}}
                            <div >
                                {{scope.row.email}}
                            </div>
                        </template>
                    </el-table-column>
                    
                    <el-table-column prop="" label="操作" >
                        <template slot-scope="scope">
                            {{scope.email}}
                            <!-- 待验证可修改 -->
                            <!-- <div v-if="scope.row.status === 0">
                                <span style="color: #4a90e2;cursor:pointer;" @click="goNewMedia(scope.row)">修改</span>
                            </div> -->
                            <!-- 正常可修改 -->
                            <!-- <div v-if="scope.row.status === 1">
                                <span style="color: #4a90e2;cursor:pointer;" @click="goNewMedia(scope.row)">修改</span>
                            </div> -->
                            <!-- 拒绝之后重新提交 -->
                            <!-- <div v-if="scope.row.status === 2">
                                <span style="color: #4a90e2;cursor:pointer;" @click="goNewMedia(scope.row)">重新提交</span>
                            </div> -->
                        </template>
                    </el-table-column>
                </el-table>
            </el-scrollbar>
        </div>
        <el-dialog
        title="邀请子账户"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>邀请链接：<el-input></el-input> <el-button>复制</el-button></span>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">知道啦</el-button>
        </span>
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
    dialogVisible: boolean = false;
    media_name: string = '';
    media_id: number|string = '';
    tableData: [] = [];
    constructor() {
        super();
    }
    created() {
        const self: any = this;
        self.$store.dispatch("getSubUserList").then((res: any) => {
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
    createSubUser() {
        const self: any = this;
        self.dialogVisible = true;
        // self.$router.push({path:'/newMedia'})
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
