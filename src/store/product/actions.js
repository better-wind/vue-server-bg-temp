import productService from '@/service/product/product'
export default {
  getProductList({commit},rs){
    return productService.getProductList(commit,rs)
  },
  setDemoConfig({commit},rs){
    commit('SET_DEMO_CONFIG',rs)
    commit('SET_DEMO_CONFIG_GLOBAL',rs,{ root: true })
  }
}
