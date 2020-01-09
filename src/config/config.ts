
const apiBaseUrl = (process.env.NODE_ENV === "production" ? "http://asmumu.jmaogou.com:3000" : "/api");
const restColection = {
    register: 'api/v1/user/create',
    sendSms: 'api/v1/mail/send',
    login: 'api/v1/user/login',
    user_info: 'api/v1/user/info',
    subList: 'api/v1/user/subList',
    updateAgentInfo: 'api/v1/user/updateAgentInfo',
    resetPassword: 'api/v1/user/resetPassword',
    resetPasswordWithoutLogin: 'api/v1/user/resetPasswordWithoutLogin',
    applyCash: 'api/v1/user/revenue/create',
    // 财务信息
    finance_info: 'api/v1/finance/info',
    finance_create: 'api/v1/finance/create',
    // 媒体
    media_list: 'api/v1/media/list',
    media_revenue_list: 'api/v1/mediaRevenueAssemble/list',
    media_add: 'api/v1/media/create',
    media_search: 'api/v1/media/search',
    // 广告位
    adposition_list: 'api/v1/adposition/list',
    ad_revenue_list: 'api/v1/advertisingAssemble/list',
    adposition_add: 'api/v1/adposition/create',
    adposition_search: 'api/v1/adposition/search',
    upload: 'api/v1/image/upload',
    getQcode: 'api/v1/qcode/info',
}
export {apiBaseUrl,restColection};