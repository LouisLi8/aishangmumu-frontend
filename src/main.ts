import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import cache from '@/util/cache';
import './plugins/element.js';
router.beforeEach((to, from, next) => {
  // console.log(to)
  // if (to.matched.some(record => record.meta.requiresAuth)) {
  //     //这里判断用户是否登录，验证本地存储是否有token
  //     if (!localStorage.token) { // 判断当前的token是否存在
  //         next({
  //             path: '/login',
  //             query: { redirect: to.fullPath }
  //         })
  //     } else {
  //         next()
  //     }
  // } else {
  //     next() // 确保一定要调用 next()
  // }
  next() // 确保一定要调用 next()
})

Vue.config.productionTip = false;
Vue.prototype.$storage = cache;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
