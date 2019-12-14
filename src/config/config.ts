
const apiBaseUrl = '/api';
const restColection = {
    register: 'api/v1/user/create',
    login: 'api/v1/user/login',
    user_info: 'api/v1/user/info',
    // 媒体
    media_list: 'api/v1/media/list',
    media_revenue_list: 'api/v1/mediaRevenueAssemble/list',
    media_add: 'api/v1/media/create',
    media_search: 'api/v1/media/search',
    // 广告位
    adposition_list: 'api/v1/adposition/list',
    adposition_add: 'api/v1/adposition/create',
    adposition_search: 'api/v1/adposition/search',
}
export {apiBaseUrl,restColection};