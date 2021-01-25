import { createAction } from 'redux-actions'

// 1. 发请求：添加商品到购物车
export const addProductToCart = createAction('addProductToCart')
// 2. 本地 store 存储添加的商品
export const addProductToLocalCart = createAction('addProductToLocalCart')
