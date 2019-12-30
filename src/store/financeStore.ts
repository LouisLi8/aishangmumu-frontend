
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
    }
  }
}
