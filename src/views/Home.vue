<template>
  <div class="home">
    <Header class="header"></Header>
	  <el-container class="container">
		  <!-- <el-main> -->
      <Menu class="menu"></Menu>
			  <el-scrollbar style="height: calc(100vh - 36px)">
          <router-view class="content"> </router-view>
			  </el-scrollbar>
	  </el-container>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
@Component({
  components: {
    Header,
    Menu
  }
})
export default class Home extends Vue {
  created() {
    // this.$router.push({path: '/homePage'});
  }
}
</script>
<style lang="scss" scoped>
.home {
  .header{
    height: 60px;
    overflow: hidden;
  }
  .content{
    width: calc(100vw - 200px);
    // height: calc(100vh - 60px);
  }
  // .menu {
  //   width: 190px;
  //   height: calc(100vh - 60px);
  //   overflow: hidden;
  // }
}
</style>
