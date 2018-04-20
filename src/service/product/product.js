import service from '@/service/index'
export default {
  getProductList(commit,rs){
    const opts = {
      method: 'GET',
      url: '/static/data/product.json',
      data: rs
    }
    return service.fetch(commit,opts)
  },
}
