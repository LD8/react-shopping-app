import { createAction } from 'redux-actions'

// 1. 发请求：添加商品到购物车
export const addProductToCart = createAction('addProductToCart')

// 2. 本地 store 存储添加的商品
export const addProductToLocalCart = createAction('addProductToLocalCart')

// 3. 请求获取购物车列表
export const loadCarts = createAction('loadCarts')

// 4. 将返回的列表同步到本地购物车
export const saveCarts = createAction('saveCarts')

// 5. 请求删除商品
export const deleteProductFromCart = createAction('deleteProductFromCart')

// 6. 删除本地 cart 中商品
export const deleteProductFromLocalCart = createAction('deleteProductFromLocalCart')

// 7. 请求修改商品数量
export const changeServiceProductNumber = createAction('changeServiceProductNumber')

// 8. 更新本地商品数量
export const changeLocalProductNumber = createAction('changeLocalProductNumber')