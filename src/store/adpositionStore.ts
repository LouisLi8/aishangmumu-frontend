import * as adpositionService from "@/service/trafficCooperation/adposition.service"
export default {
    state: {
      },
      mutations: {
        
      },
      actions: {
        async ADPOSITION_LIST({ commit }: any) {
          return await adpositionService.adposition_list();
        },
        async ad_revenue_list({ commit }: any) {
          return await adpositionService.ad_revenue_list();
        },
        async ADPOSITION_SEARCH({ commit }: any, params: any) {
          return await adpositionService.adposition_search(params);
        },
        async ADPOSITION_CREATE({ commit }: any, params: any) {
          return await adpositionService.adposition_add(params);
        },
      }
}