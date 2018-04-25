import axios from 'axios';
// // import qs from 'qs';


// axios 配置
// axios.defaults.timeout = 5000;

// 拦截器
/* eslint-disable */
axios.interceptors.request.use((config) => {
   return config;
}, (error) => {
  console.error('错误的传参');
  return Promise.reject(error);
});


// 其他的网络工具函数也可以在这里export出去
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        networkErrorHandler(res, resolve, reject)
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: params})
    .then(res => {
      networkErrorHandler(res, resolve, reject)
    }, err => {
      reject(err)
    })
    .catch((err) => { reject(err)});
  })
}

// 网络请求错误集中处理
function networkErrorHandler(res, resolve, reject) {
  if(res.data.code!==200){
    // reject(res.data.msg)
    reject(res.data)
  }else{
    resolve(res.data);
  }
}


/* eslint-enable */
