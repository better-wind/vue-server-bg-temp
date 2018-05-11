const ProductList = resolve => require(['@/views/product/product'], resolve),
      ProductEdit = resolve => require(['@/views/product/productEdit'], resolve)

export default [
  {
    path: '/product/list',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/product/edit',
    name: 'ProductEdit',
    component: ProductEdit
  },
]
