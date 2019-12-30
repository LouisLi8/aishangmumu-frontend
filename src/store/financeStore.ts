
import * as financeService from "@/service/trafficCooperation/finance.service"

export default {
  state: {
  },
  getters: {
    
  },
  mutations: {
    
  },
  actions: {
    async finance_info({ commit }: any) {
      return await financeService.finance_info().catch((err: any) =>{
            console.error(err);
        });
    },
    async finance_create({ commit }: any, params: any) {
      return await financeService.finance_create(params).catch((err: any) =>{
            console.error(err);
        });
    }
  }
}
