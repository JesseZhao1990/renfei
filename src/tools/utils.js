/**
 * 工具函数的书写要按照模块的规范来，要支持单独引入和全部引入
 */


/**
 * 存用户信息到本地
 * @param {*} key
 * @param {*} value
 */
export function saveLocalMsg(key, value) {
  const Value = JSON.stringify(value);
  localStorage.setItem(key, Value);
}
/**
 * 从本地获取用户信息
 * @param {*} key
 */
export function getLocalMsg(key) {
  const Value = localStorage.getItem(key);
  return JSON.parse(Value);
}

/**
 * 操作querystring
 */
export const querystring = {
  parse(qs) {
    /* eslint-disable */
    let obj = {};
    if (!qs) {
      // console.error('请传入search');
      return obj;
    }
    const qsSub = qs.substring(1,qs.length);
    const qsArray = qsSub.split('&');
    qsArray.map((item) => {
      const itemArray = item.split('=');
      obj[itemArray[0]] = itemArray[1];
    })
    return obj;
  }
};
const defaultObj = {
  saveLocalMsg,
  getLocalMsg,
  querystring,
}

export default defaultObj;
