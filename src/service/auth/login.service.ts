import {restColection} from '@/config/config';
import {get,post} from '@/service/remote.service';
const login = (params: any) => {
    return new Promise((resolve: any, reject: any) => {
        post(restColection.login, params).then((res: any) => {
            if(res.code === 200) {
                resolve(res.data);
            } else {
                reject(res);
            }
        })
    })
}
const getUserInfo = async () => {
    return new Promise((resolve: any, reject: any) => {
        get(restColection.user_info).then((res: any) => {
            if(res.code === 200) {
                resolve(res.data);
            } else {
                reject(res);
            }
        })
    })
}
const resetPasswordWithoutLogin = async (params: any) => {
    return new Promise((resolve: any, reject: any) => {
        post(restColection.resetPasswordWithoutLogin, params).then((res: any) => {
            if(res.code === 200) {
                resolve(res.data);
            } else {
                reject(res);
            }
        })
    })
}
const resetPassword = async (params: any) => {
    return new Promise((resolve: any, reject: any) => {
        post(restColection.resetPassword, params).then((res: any) => {
            if(res.code === 200) {
                resolve(res.data);
            } else {
                reject(res);
            }
        })
    })
}
const applyCash = async (params: any) => {
    return new Promise((resolve: any, reject: any) => {
        post(restColection.applyCash, params).then((res: any) => {
            if(res.code === 200) {
                resolve(res.data);
            } else {
                reject(res);
            }
        })
    })
}
const updateAgentInfo = async (params: any) => {
    return new Promise((resolve: any, reject: any) => {
        post(restColection.updateAgentInfo, params).then((res: any) => {
            if(res.code === 200) {
                resolve(res.data);
            } else {
                reject(res);
            }
        })
    })
}
const register = (params: any) => {
    return new Promise(async (resolve: any, reject: any) => {
        const res: any = await post(restColection.register, params);
        if(res && res.code === 200) {
            resolve(res.data);
        } else {
            reject(res);
        }
    });
}
const mailSend = (params: any) => {
    return new Promise(async (resolve: any, reject: any) => {
        const res: any = await post(restColection.sendSms, params);
        if(res && res.code === 200) {
            resolve(res.data);
        } else {
            reject(res);
        }
    });
}
export {login,register, getUserInfo, updateAgentInfo, resetPassword, applyCash, mailSend, resetPasswordWithoutLogin}