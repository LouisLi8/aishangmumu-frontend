import {restColection} from '@/config/config';
import {get,post} from '@/service/remote.service';
const media_list = async () => {
    return new Promise((resolve: any, reject: any) => {
        get(restColection.media_list).then((res: any) => {
            if(res.code === 200) {
                resolve(res.data);
            } else {
                console.warn(res);
            }
        })
    })
}
const media_search = async (params: any) => {
    return new Promise((resolve: any, reject: any) => {
        post(restColection.media_search, params).then((res: any) => {
            if(res.code === 200) {
                resolve(res.data);
            } else {
                console.warn(res);
            }
        })
    })
}
const media_add = (params: any) => {
    return new Promise((resolve: any, reject: any) => {
        post(restColection.media_add, params).then((res: any) => {
            if(res.code === 200) {
                resolve(res.data);
            } else {
                console.warn(res);
            }
        })
    })
}
export {media_list, media_add, media_search}