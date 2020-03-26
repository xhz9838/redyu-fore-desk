//自定义函数
const request = {
    test : (params) => {
      return axios.get('/web-service/test',{
        params
      })
    },
  }
  
  var axios = null
  export default ({ $axios }, inject) => {
  
    //3） 保存内置的axios
    axios = $axios
  
    //4) 将自定义函数交于nuxt
    // 使用方式1：在vue中，this.$request.xxx()
    // 使用方式2：在nuxt的asyncData中，content.app.$request.xxx()
  
    inject('request', request)
  }
  