import {getQcodeInfo, upload} from "@/service/common.service"
export default {
    state: {
      },
      mutations: {
        
      },
      actions: {
        async upload({ commit }: any, file: any) {
          return await upload(file);
        },
        async getQcode({ commit }: any) {
          return await getQcodeInfo();
        }
      }
}