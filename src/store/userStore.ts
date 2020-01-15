
import * as loginService from "@/service/auth/login.service"

export default {
  state: {
    userInfo: '',
  },
  getters: {
    userInfo: (state: any) => {
      return state.userInfo
    }
  },
  mutations: {
    updateUserInfo(state: any, userInfo: any) {
      state.userInfo = userInfo;
    }
  },
  actions: {
    async getSubUserList({ commit }: any) {
        const userInfo = await loginService.getSubUserList().catch((err: any) =>{
            // console.error(err);
        });
        commit('updateUserInfo', userInfo);
        return userInfo;
    },
    async getUserInfo({ commit }: any) {
        const userInfo = await loginService.getUserInfo().catch((err: any) =>{
            // console.error(err);
        });
        commit('updateUserInfo', userInfo);
        return userInfo;
    },
    async updateAgentInfo({ commit }: any, params: any) {
      await loginService.updateAgentInfo(params).catch((err: any) =>{});
      const userInfo = await loginService.getUserInfo().catch((err: any) =>{ console.error(err);});
      commit('updateUserInfo', userInfo);
      return userInfo;
    },
    async resetPassword({ commit }: any, params: any) {
      const res = await loginService.resetPassword(params).catch((err: any) =>{});
      return res;
    },
    async applyCash({ commit }: any, params: any) {
      const res = await loginService.applyCash(params).catch((err: any) =>{});
      return res;
    },
    async setPercentage({ commit }: any, params: any) {
      const res = await loginService.setPercentage(params).catch((err: any) =>{});
      return res;
    },
  }
}
