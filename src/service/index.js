import axios from 'axios'
import types from '@/store/types'
import './interceptors/pageParams' //分页数据过滤
import './interceptors/cancelFetch' //重复请求拦截
const fetch = (commit,opts,fn)=>{
  return new Promise((resolve)=>{
    axios(opts).then((response)=>{
      if(response.data.code == 1){
        fn && commit(fn,response.data)
        resolve && resolve(response.data.data)
      } else {
        errCatch(commit,resolve,response.data.message)
      }
    })
      .catch((err)=>{
        errCatch(commit,resolve,'服务器异常请稍后重试')
      })
  })
}
const errCatch = (commit,resolve,msg) => {
  commit(types.SET_TOAST,{
    isShow:true,
    msg:msg,
    type:'error'
  })
  resolve && resolve()

}

export default {
  fetch:fetch
}
