import {cacheUtil} from '@/util/cache';

let organization_type = () => localStorage.getItem("organization_type");
export default class Transfrom {
    public static getOrganizationType() {
        if(!organization_type) {
            cacheUtil.get('organization_type').then((type: any)=> {
                organization_type = type;
            })
        }
    }
}
export const organizationType = organization_type();
