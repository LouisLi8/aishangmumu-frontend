/**
 * 封装axios请求
 * GET | POST | PUT | DELETE
 * 错误校验code定义：
 * 401         token不合法，跳转到登录页面
 * 403         无权限
 * app_401     禁止操作
 * app_402     数据已存在
 * app_403     参数不可为空
 * app_404     数据不存在
 * app_405     字典类型： 文件，上传文件不能为空
 * app_406     参数校验错误
 * sso_401     禁止操作
 * sso_402     数据已存在
 * sso_403     参数不可为空
 * sso_404     数据不存在
 * 500         服务器内部错误
 * auth by louis
 */
import Vue from 'vue';
import * as Axios from 'axios';
import router from '@/router';

// import Qs from "qs";
import cacheSession from '@/util/cacheSession';
import { apiBaseUrl } from '@/config/config';
const axios: any = Axios.default;
axios.defaults.baseURL = apiBaseUrl;
axios.defaults.retry = 4;
axios.defaults.retryDelay = 1000;
axios.defaults.timeout = 3000;
const app: any = new Vue();

// create an axios instance   创建axios实例
const service = axios.create({
  baseURL: apiBaseUrl,
  timeout: 3000,
  responseType: "json",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    "Cache-Control": "no-cache"
  }
})
const isFormData = (v: any) => {
  return Object.prototype.toString.call(v) === '[object FormData]';
}
const pending: any = []; // 声明一个数组用于存储每个请求的取消函数和axios标识
const cancelToken: any = axios.CancelToken;
const removePending = (config: any) => {
  for(const p in pending) {
  if(pending[p].u === config.url + JSON.stringify(config.data) + config.method) { // 当当前请求在数组中存在时执行函数体
    if (!isFormData(config.data)) {
      pending[p].f(); // 执行取消操作
      pending.splice(p, 1);
      console.warn(`短时间重复调用${config.url}多余请求被取消！！`);
    }
  }
 }
}


/* 全局添加拦截器作用是可以在每个api前面就加上headers的token验证 */
/* 判断token是否存在和是否需要token验证的路由 */
service.interceptors.request.use(async (config: any) => {
  removePending(config);
  config.cancelToken = new cancelToken((c: any) => {// 本次axios请求的配置添加cancelToken
      pending.push({
            u: config.url + JSON.stringify(config.data) + config.method,
            f: c
      })
    });
  const token = await cacheSession.get("app_token");
  if(token) {
      config.headers.Authorization = 'Bearer ' + token;
    } else {
      // 对请求错误做些什么
      // const pathName: any = router.currentRoute.name;
      // if(!['login', 'backPassword'].includes(pathName)) {
      //   return Promise.reject();
      // }
    }
  return config;
});

/* 处理退出响应拦截器 */
// 响应 拦截器 的第二个参数, err 可以捕获状态, 来进行响应的处理
service.interceptors.response.use(async (response: any) => {
  // console.log(response)
  if (response.status === 200) {
    if (response.data && response.data.code) {
      switch(response.data.code) {
        case '401': await cacheSession.clear();
                    // app.$message.error("401 登录过期或不合法！");
                    router.push({path: '/login'});
                    return Promise.reject();
                    break;
        case '403': app.$message.error('403 无权限！'); break;
        case 'app_401': app.$message.error(response.data.msg); return Promise.reject(); break;
        case  300: app.$message.error(response.data.msg); break;
        case 'app_403': app.$message.error(response.data.msg); break;
        case 'app_404': app.$message.error(response.data.msg); break;
        case 'app_405': app.$message.error(response.data.msg); break;
        case 'app_406': app.$message.error(response.data.msg); break;
        case 'app_413': app.$message.error(response.data.msg); break;
        case 'sso_401': app.$message.error(response.data.msg); break;
        case 'sso_402': app.$message.error(response.data.msg); break;
        case 'sso_403': app.$message.error(response.data.msg); break;
        case 'sso_404': app.$message.error(response.data.msg); break;
        case 'sso_413': app.$message.error(response.data.msg); break;
        case '500': app.$message.error("500 请联系系统管理员");return Promise.reject(); break;
        default: break;
      }
      return response.data;
    }
  } else {
    return response;
  }
},
(err: any) => {
  // console.log(err.code)
  if(err) {
    if (err.code === "ECONNABORTED") {
      app.$message.error('请求超时！');return err;
    }
  }
  if (err && err.response) {
    switch (err.response.status) {
      case 400:app.$message.error('请求错误');break;
      case 401:app.$message.error('未授权，请登录');break;
      case 403:app.$message.error('拒绝访问');break;
      case 404:app.$message.error(`请求地址出错`); break;
      case 408:app.$message.error('请求超时'); break;
      case 500:app.$message.error('服务器内部错误'); break;
      case 501:app.$message.error('服务未实现');break;
      case 502:app.$message.error('网关错误'); break;
      case 503:app.$message.error('服务不可用'); break;
      case 504:app.$message.error('网关超时'); break;
      case 505:app.$message.error('HTTP版本不受支持'); break;
      default: break;
    }
  }
  return Promise.reject(err);
});

/**
 * global network error handler
 * @param error
 */
const errorHandler = (error: any) => {
  throw error;
};
/**
 * @param url
 * @param params
 * @param config
 */
export const get = (url: string, params?: any, config?: Axios.AxiosRequestConfig | undefined): Axios.AxiosPromise<any> => {
  return service.get( url, params, config).then((res: any) => res, (err: any) => errorHandler(err));
};
export const post = (url: string, data?: any, config?: Axios.AxiosRequestConfig | undefined): Axios.AxiosPromise<any> => {
  return service.post( url, data, config).then((res: any) => res, (err: any) => errorHandler(err));
};
export const del = (url: string, data?: any, config?: Axios.AxiosRequestConfig | undefined): Axios.AxiosPromise<any> => {
  return service.delete( url, data, config).then((res: any) => res, (err: any) => errorHandler(err));
};
export const put = (url: string, data?: any, config?: Axios.AxiosRequestConfig | undefined): Axios.AxiosPromise<any> => {
  return service.put( url, data , config).then((res: any) => res, (err: any) => errorHandler(err));
};
export const request = (url: string, data?: any, config?: Axios.AxiosRequestConfig | undefined): Axios.AxiosPromise<any> => {
  return service( url, data, config).then((res: any) => res, (err: any) => errorHandler(err));
};


// file为 你读取成功的回调文件信息
// new 一个FormData格式的参数
export const uploadImage = (url: string, file: any) => {
  const params = new FormData();
  params.append("file", file.file);
  const config = {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  };
  return new Promise((resolve, reject) => {
    service
      .post(url, params, config)
      // .onUploadProgress(
      //   (progressEvent: any) => {
      //     console.log(progressEvent);
      //   }
      // )
      .then(
        (response: any) => {
          resolve(response);
        },
        (err: any) => {
          reject(err);
        }
      )
      .catch((err: any) => {
        console.log("系统异常");
        reject(err);
      });
  });
};