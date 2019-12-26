/**
 * 上传附件转base64
 * @param {File} file 文件流
 */
export const fileByBase64 = (file: any, callback: any) => {
    const reader = new FileReader();
    // 传入一个参数对象即可得到基于该参数对象的文本内容
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
      // target.result 该属性表示目标对象的DataURL
      callback(e.target.result)
    };
  }
/**
 * base64转Blob
 * @param {*} data
 */
export const base64ByBlob = (base64: any, callback: any) => {
    const arr = base64.split(',')
    const mime = arr[0].match(/:(.*?);/)[1]
    const bstr = atob(arr[1])
    let n: number = bstr.length
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    callback(new Blob([u8arr], { type: mime }))
  }
//   blob转url
  export const fileByUrl = (file: any) => {
      return new Promise((resolve, reject) => {
          fileByBase64(file, (base64: any) => {
              base64ByBlob(base64, ((blob: any) => {
                const url = window.URL.createObjectURL(blob)
                resolve(url);
              }))
          })
      })
  }
