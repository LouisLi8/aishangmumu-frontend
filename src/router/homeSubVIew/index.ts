const routes = [
    {
      path: "/homePage",
      name: "homePage",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "homePage" */ "@/components/homeSubView/indexPage.vue")
    },
    {
      path: "/myMedia",
      name: "myMedia",
      component: () =>
        import(/* webpackChunkName: "myMedia" */ "@/components/homeSubView/trafficCooperation/myMedia.vue")
    }
  ];
export default routes;