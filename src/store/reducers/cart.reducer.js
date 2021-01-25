import { handleActions as createReducer } from 'redux-actions'
import {
  addProductToLocalCart,
  saveCarts,
  deleteProductFromLocalCart,
  changeLocalProductNumber,
} from '../actions/cart.action'

const initialState = []

const handleAddProductToLocalCart = (state, action) => {
  // 深拷贝
  const newState = JSON.parse(JSON.stringify(state))
  const product = newState.find((product) => product.id === action.payload.id)
  if (product) {
    // 1. 商品已经在购物车中：数量+1
    product.count = product.count + 1
  } else {
    // 2. 商品没有在购物车中：添加
    newState.push(action.payload)
  }
  return newState
}

const handleSaveCarts = (state, action) => action.payload

const handleDeleteProductFromLocalCart = (state, action) => {
  // 深拷贝
  const newState = JSON.parse(JSON.stringify(state))
  newState.splice(action.payload, 1)
  return newState
}

const handleChangeLocalProductNumber = (state, action) => {
  // 深拷贝
  const newState = JSON.parse(JSON.stringify(state))
  const product = newState.find((p) => p.id === action.payload.id)
  product.count = action.payload.count
  return newState
}

export default createReducer(
  {
    // 将商品保存到本地购物车 store 容器中
    [addProductToLocalCart]: handleAddProductToLocalCart,
    // 将cart商品列表数据保存到本地 store 容器中
    [saveCarts]: handleSaveCarts,
    // 删除本地 cart 中商品
    [deleteProductFromLocalCart]: handleDeleteProductFromLocalCart,
    // 修改本地商品数量
    [changeLocalProductNumber]: handleChangeLocalProductNumber,
  },
  initialState,
)
