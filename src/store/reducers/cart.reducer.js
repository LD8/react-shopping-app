import { handleActions as createReducer } from 'redux-actions'
import { addProductToLocalCart } from '../actions/cart.action'

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

export default createReducer(
  {
    // 将商品保存到本地购物车 store 容器中
    [addProductToLocalCart]: handleAddProductToLocalCart,
  },
  initialState,
)
