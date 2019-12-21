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
    },
    {
      path: "/adpositiondata",
      name: "adpositiondata",
      component: () =>
        import(/* webpackChunkName: "adpositiondata" */ "@/components/homeSubView/trafficCooperation/adpositiondata.vue"),
    },
    {
      path: "/newadposition",
      name: "newadposition",
      component: () =>
        import(/* webpackChunkName: "newadposition" */ "@/components/homeSubView/trafficCooperation/newAdposition.vue"),
    },
    // 媒体收益
    {
      path: "/mediadata",
      name: "mediadata",
      component: () =>
        import(/* webpackChunkName: "mediadata" */ "@/components/homeSubView/dataRevenue/mediadata.vue"),
    },
    // 广告位收益
    {
      path: "/adRevenue",
      name: "adRevenue",
      component: () =>
        import(/* webpackChunkName: "adRevenue" */ "@/components/homeSubView/dataRevenue/adRevenue.vue"),
    },
  ];
export default routes;