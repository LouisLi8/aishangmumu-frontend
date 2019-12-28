import localforge from 'localforage';
// import moment from 'moment';

const EXPIRE_KEY = '_expire';

class Cache {
  public generateKey = (url: string, params: any) => {
    const sortedParams = Object.keys(params).sort().reduce((result: any, key: any) => {
      result[key] = params[key];
      return result;
    }, {});
    url += `${JSON.stringify(sortedParams)}`;
    return url;
  }

  public set = async (key: string, data: any, expired: number) => {
    try {
      await localforge.setItem(key, data);
      // await localforge.setItem(`${key}${EXPIRE_KEY}`, moment().add(expired, 'milliseconds').toString());
      return true;
    } catch (err) {
      console.log(err);
    }
  }

  public get = async (key: string) => {
    try {
      const expiredKey = `${key}${EXPIRE_KEY}`;
      // const expired: any = await localforge.getItem(expiredKey);
      // if (expired && moment(expired).isBefore(moment())) {
      //   localforge.removeItem(expiredKey);
      //   return null;
      // } else {
      return await localforge.getItem(key);
      // }
    } catch (err) {
      console.log(err);
    }
  }

  public remove = async (key: string) => {
    try {
      return await localforge.removeItem(key);
    } catch (err) {
      console.log(err);
    }
  }

  public clear = async () => {
    try {
      await localforge.clear();
    } catch (err) {
      console.log(err);
    }
  }
}

export default new Cache();
