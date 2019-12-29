const routes = [
  
    {
      path: "/homePage",
      name: "homePage",
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
    // 账户管理
    {
      path: "/account",
      name: "account",
      component: () =>
        import(/* webpackChunkName: "account" */ "@/components/homeSubView/account/account.vue"),
      children: [
        {
          path: "/account/basic",
          name: "account/basic",
          component: () =>
            import(/* webpackChunkName: "account/basic" */ "@/components/homeSubView/account/basic.vue"),
        },
        {
          path: "/account/accountfinance",
          name: "account/accountfinance",
          component: () =>
            import(/* webpackChunkName: "account/accountfinance" */ "@/components/homeSubView/account/accountfinance.vue"),
        },
        {
          path: "/account/agent",
          name: "account/agent",
          component: () =>
            import(/* webpackChunkName: "account/agent" */ "@/components/homeSubView/account/agent.vue"),
        },
      ]
    },
    // 财务管理
    {
      path: "/finance",
      name: "finance",
      component: () =>
        import(/* webpackChunkName: "finance" */ "@/components/homeSubView/finance/finance.vue"),
    },
  ];
export default routes;