import {restColection} from '@/config/config';
import {get,post} from '@/service/remote.service';
const login = (params: any) => {
    return new Promise((resolve: any, reject: any) => {
        post(restColection.login, params).then((res: any) => {
            if(res.code === 200) {
                resolve(res);
            } else {
                console.warn(res);
            }
        })
    })
}
export {login}