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
      path: "/media",
      name: "media",
      component: () =>
        import(/* webpackChunkName: "media" */ "@/components/homeSubView/trafficCooperation/myMedia.vue"),
    },
    {
      path: "/validmedia",
      name: "validmedia",
      component: () =>
        import(/* webpackChunkName: "validmedia" */ "@/components/homeSubView/trafficCooperation/validmedia.vue"),
    },
    {
      path: "/newMedia",
      name: "/newMedia",
      component: () =>
    import(/* webpackChunkName: "newMedia" */ "@/components/homeSubView/trafficCooperation/newMedia.vue"),
    }
  ];
export default routes;