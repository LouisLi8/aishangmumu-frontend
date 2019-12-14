import {restColection} from '@/config/config';
import {get,post} from '@/service/remote.service';
const adposition_list = async () => {
    return new Promise((resolve: any, reject: any) => {
        get(restColection.adposition_list).then((res: any) => {
            if(res.code === 200) {
                resolve(res.data);
            } else {
                console.warn(res);
            }
        })
    })
}
const adposition_search = async (params: any) => {
    return new Promise((resolve: any, reject: any) => {
        post(restColection.adposition_search, params).then((res: any) => {
            if(res.code === 200) {
                resolve(res.data);
            } else {
                console.warn(res);
            }
        })
    })
}
const adposition_add = (params: any) => {
    return new Promise((resolve: any, reject: any) => {
        post(restColection.adposition_add, params).then((res: any) => {
            if(res.code === 200) {
                resolve(res.data);
            } else {
                console.warn(res);
            }
        })
    })
}
export {adposition_list, adposition_search, adposition_add}