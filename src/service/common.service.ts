import {restColection} from '@/config/config';
import {uploadImage, get} from '@/service/remote.service';
const upload = async (file: any) => {
    return new Promise((resolve: any, reject: any) => {
        uploadImage(restColection.upload, file).then((res: any) => {
            if(res.code === 200) {
                resolve(res.data);
            } else {
                console.warn(res);
            }
        })
    })
}
const getQcodeInfo = async () => {
    return new Promise((resolve: any, reject: any) => {
        get(restColection.getQcode).then((res: any) => {
            if(res.code === 200) {
                resolve(res.data);
            } else {
                console.warn(res);
            }
        })
    })
}
export {upload, getQcodeInfo}