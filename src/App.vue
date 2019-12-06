<template>
  <el-scrollbar>
  <div id="app">
		<router-view> </router-view>
  </div>
</el-scrollbar>
</template>

<script>
import '@/styles/base.scss';
export default {
  name: 'app',
  components: {
  }
}
</script>
