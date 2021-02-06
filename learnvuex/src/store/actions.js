export default {  // mutations别进行异步操作，异步操作使用actions
  /*aUpdateInfo(content, payload){
    setTimeout(() => {
      content.commit('updateInfo')
      console.log(payload.message);
      payload.success()
    },1000)
  },*/
  aUpdateInfo(content, payload){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        content.commit('updateInfo')
        resolve()
      },1000)
    })
  }
}
