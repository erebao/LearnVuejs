import axios from 'axios'

// 方式一：
/*export function request(config, success, failure) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 10000,
  })

  //发送真正的网络请求
  instance(config).then(res => {
    // console.log(res)
    success(res)
  }).catch(err => {
    // console.log(err);
    failure(err)
  })
}*/

// 方式二：
/*export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 10000,
  })

  //发送真正的网络请求
  instance(config.baseConfig).then(res => {
    // console.log(res)
    config.success(res)
  }).catch(err => {
    // console.log(err);
    config.failure(err)
  })
}*/

// 方式三（推荐）：
/*export function request(config) {
  return new Promise((resolve, reject) => {
    // 1.创建axios的实例
    const instance = axios.create({
      baseURL: 'http://localhost:8000',
      timeout: 10000,
    })

    //发送真正的网络请求
    instance(config).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}*/

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 10000,
  })

  // 2.axios的拦截器
  // 请求拦截
  /*instance.interceptors.request.use(config => {
    console.log(config);
    //使用场景：
    // 1.比如说config中的一些信息不符合服务器的要求，要经过变化后在发送
    // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图片
    // 3.某些网络请求，比如登录是必须携带一些特殊的信息(token)
    return config
  }, err => {
    console.log(err);
  });*/
  //响应拦截
  instance.interceptors.response.use(res => {
    console.log(res);
    return res
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}
