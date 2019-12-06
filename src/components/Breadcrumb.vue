
<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/" >
      <el-breadcrumb-item v-for="(item,index) in breadcrumbItems" :to="item.to" :key="index">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- <el-divider></el-divider> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
    components: {
    }
})
export default class ZDHBreadcrumb extends Vue {
    @Prop()
    breadcrumbItems: any;
    constructor() {
        super();
    }
}
</script>
<style lang="scss" scoped>
.breadcrumb{
  padding-bottom: 20px;
}
</style>
