import {restColection} from '@/config/config';
import {get,post} from '@/service/remote.service';
const finance_info = async () => {
    return new Promise((resolve: any, reject: any) => {
        get(restColection.finance_info).then((res: any) => {
            if(res.code === 200) {
                resolve(res.data);
            } else {
                console.warn(res);
            }
        })
    })
}
const finance_create = async () => {
    return new Promise((resolve: any, reject: any) => {
        post(restColection.finance_create).then((res: any) => {
            if(res.code === 200) {
                resolve(res.data);
            } else {
                console.warn(res);
            }
        })
    })
}
export {finance_info, finance_create}