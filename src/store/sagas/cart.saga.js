import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
import { addProductToCart, addProductToLocalCart } from '../actions/cart.action'

function* handleAddProductToCart(action) {
  const { data } = yield axios.post('http://localhost:3005/cart/add', { gid: action.payload })
  // 将商品列表数据保存到本地 store 容器中
  yield put(addProductToLocalCart(data))
}

export default function* cartSaga() {
  // 添加商品到购物车
  yield takeEvery(addProductToCart, handleAddProductToCart)
}
