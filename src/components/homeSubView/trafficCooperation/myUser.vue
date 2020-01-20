<template>
    <div class="wrap">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>流量合作</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/media' }">我的子账号</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row style="margin: 30px 0;">
            <!-- <el-col :span="19"> -->
                <!-- 媒体名称：
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
                     <el-button size="small" style="margin-left: 20px;" @click="search">搜索</el-button> -->
            <!-- </el-col> -->
            <el-col :span="5" style="text-align:left;cursor:pointer;">
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
                            <!-- 无分成可修改 -->
                            <div v-if="!scope.row.percentage">
                                <span style="color: #4a90e2;cursor:pointer;" @click="deal(scope.row)">分成</span>
                            </div>
                            <!-- 正常可修改 -->
                            <div v-if="scope.row.percentage">
                                分成：{{scope.row.percentage}} %
                                <div style="color: #4a90e2;cursor:pointer;" @click="deal(scope.row)">修改</div>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </el-scrollbar>
        </div>
        <el-dialog
        title="邀请子账户"
        :visible.sync="dialogVisible"
        width="50%"
        >
        <el-row>
            <el-col :span="24"><span>邀请链接：<el-input v-model="invite_link" style="width: 80%;"></el-input></span><span @click="handelCopy" style="border: 1px solid #409EFF;padding: 8px 10px;background:#409EFF;color:#fff;cursor:pointer">复制</span></el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">知道啦</el-button>
        </span>
        </el-dialog>
        <el-dialog
        :title="percentageTitle"
        :visible.sync="dialogPercentageVisible"
        width="300px"
        >
        <el-row>
            <el-col :span="24"><span>分成比例：<el-input v-model="percentage" style="width: 60%;"></el-input> %</span></el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="toSet">确定</el-button>
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
    dialogPercentageVisible: boolean = false;
    dialogVisible: boolean = false;
    media_name: string = '';
    invite_link: string = '';
    percentageTitle: string = '';
    cRow: any = {};
    userInfo: any = {};
    percentage: number = 0;
    media_id: number|string = '';
    tableData: [] = [];
    constructor() {
        super();
    }
    created() {
        const self: any = this;
        self.$store.dispatch("getSubUserList").then((res: any) => {
            self.tableData = res.sub_users;
        });
        self.initUserInfo();
    }
    deal(row: any) {
        const self: any = this;
        self.percentageTitle = row.real_name;
        self.cRow = row;
        self.percentage = row.percentage || 0;
        self.dialogPercentageVisible = true;
    }
    async toSet() {
        const self: any = this;
        const r: any = await self.$store.dispatch("setPercentage", {percentage: +self.percentage, id: self.cRow.id});
        self.dialogPercentageVisible = false;
        if(r) {
            self.$message.success(`子账户${self.cRow.real_name}的分成比例修改成功！`);
            self.$store.dispatch("getSubUserList").then((res: any) => {
            self.tableData = res.sub_users;
        });
        }
    }
    handelCopy() {
        const self: any = this;
        let url = this.invite_link;
        let oInput = document.createElement('input');
        oInput.value = url;
        document.body.appendChild(oInput);
        oInput.select(); // 选择对象;
        document.execCommand("Copy"); // 执行浏览器复制命令
        self.$message({
          message: '复制成功',
          type: 'success'
        });
        oInput.remove()
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
    async initUserInfo() {
        const self: any = this;
        // self.userInfo = await self.$storage.get('userInfo')
        self.userInfo = await self.$store.dispatch("getUserInfo");
        await self.$storage.set('userInfo', self.userInfo)
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
        self.invite_link = `${window.location.origin}/register?inviteCode=${self.userInfo.id}`;
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
