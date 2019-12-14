import * as mediaService from "@/service/trafficCooperation/media.service"
export default {
    state: {
        tempMedia: '',
        preference_industry: [
          '金融理财',
          '医疗保健',
          '教育培训',
          '服装鞋帽',
          '箱包服饰',
          '食品饮料',
          '家庭日用',
          '母婴护理',
          '化妆护理',
          '手机数码',
          '家用电器',
          '硬件办公',
          '家居建材',
          '网络服务',
          '生活服务',
          '交通出行',
          '旅游住宿',
          '房地产',
          '通讯服务',
          '游戏',
          '休闲娱乐',
          '媒体自我推广',
          '优惠卡券',
          '电商平台',
        ]
      },
      mutations: {
        updateTempMedia(state: any, tempMedia: any) {
          state.tempMedia = tempMedia;
        }
      },
      actions: {
        async MEDIA_LIST({ commit }: any) {
          return await mediaService.media_list();
        },
        async media_revenue_list({ commit }: any) {
          return await mediaService.media_revenue_list();
        },
        async MEDIA_SEARCH({ commit }: any, params: any) {
          return await mediaService.media_search(params);
        },
        async MEDIA_CREATE({ commit }: any, params: any) {
          return await mediaService.media_add(params);
        },
      }
}