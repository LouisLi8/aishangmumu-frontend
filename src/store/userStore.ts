
import * as loginService from "@/service/auth/login.service"

export default {
  state: {
    userInfo: '',
  },
  mutations: {
    updateUserInfo(state: any, userInfo: any) {
      state.userInfo = userInfo;
    }
  },
  actions: {
    async getUserInfo({ commit }: any) {
        const userInfo = await loginService.getUserInfo().catch((err: any) =>{
            // console.error(err);
        });
        commit('updateUserInfo', userInfo);
        return userInfo;
    },
  }
}
