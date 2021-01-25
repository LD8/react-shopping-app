import { createAction } from 'redux-actions'

// 向服务器端请求商品列表数据
export const loadProducts = createAction('load products')
// 将服务端返回的商品列表数据 保存到本地 store 容器中
export const saveProducts = createAction('save products')