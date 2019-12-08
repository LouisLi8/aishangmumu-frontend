class Check {
    // 是否为空
    isNull(str: any) {
        if (str.length === 0) {return true; } else { return false; }
    }
    // 是否为邮件
    isEmail(str: any) {
        const reg = /^\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        if (reg.test(str)) {return true; }  else { return false; }
    }
    // 是否为手机号
    isPhone(str: any) {
        const a = /^1\d{10}$/;
        if (a.test(str)) {return true; }
    }
    // 是否汉字
    isCN(str: any) {
        const reg = /^[\u4e00-\u9fa5]+$/;
        if (reg.test(str)) {return true; } else { return false; }
    }
    // 是否密码
    isPwd(str: any) {
        const reg = /^[A-Za-z0-9_-]+$/;
        if (reg.test(str)) {return true; }
    }
    // 是否为微信号
    isWx(str: any) {
        const rex = /^[a-zA-Z\d_]{5,}$/;
        if (rex.test(str)) {return true; }
        return false;
    }
    // 是否全为数字
    isNum(num: any) {
        const rex = /^[0-9]+$/;
        if (rex.test(num)) {return true; }
        return false;
    }
    // 是否全为热线电话
    isHotline(num: any) {
        const rex = /^[0-9]([0-9]|-)*[0-9]$/;
        if (rex.test(num)) {return true; }
        return false;
    }
    // 是否为钱数
    isMoney(n: any) {
        const rex = /^[0-9]+$/;
        const num = n.trim();
        const _this = this;
        const numArr = num.toString().split('.');
        const len = numArr.length;
        let temp = 0;
        if (len > 2) {return false; }
        if (len === 2) {
        const l = numArr[1].length;
        const l1 = numArr[0].length;
        if (l > 2) {
            return false;
        }
        if (numArr[0].trim().length !== l1) {return false; }
        }
        for(const i of Object.keys(numArr)) {
        if (numArr[i] < 0 || !_this.isNum(numArr[i])) {
            temp = 1;
        }
        }
        if (temp) {return false; }
        return true;
    }
    // 判断是否为url地址
    isUrl(str: any) {
        const rex = /^(http|https){1}:\/\/[^\s]+$/;
        if (rex.test(str)) {return true; } else { return false; }
    }
}
const validate =  new Check();
export default validate;
