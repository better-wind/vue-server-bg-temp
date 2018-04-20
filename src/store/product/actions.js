import productService from '@/service/product/product'
export default {
  getProductList({commit},rs){
    return productService.getProductList(commit,rs)
  }
}
