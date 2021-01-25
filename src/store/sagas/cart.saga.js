import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
import {
  addProductToCart,
  addProductToLocalCart,
  loadCarts,
  saveCarts,
  deleteProductFromCart,
  deleteProductFromLocalCart,
  changeServiceProductNumber,
  changeLocalProductNumber,
} from '../actions/cart.action'

function* handleAddProductToCart(action) {
  const { data } = yield axios.post('http://localhost:3005/cart/add', { gid: action.payload })
  // 将商品列表数据保存到本地 store 容器中
  yield put(addProductToLocalCart(data))
}

function* handleLoadCarts(action) {
  const { data } = yield axios.get('http://localhost:3005/cart', { gid: action.payload })
  // 将cart商品列表数据保存到本地 store 容器中
  yield put(saveCarts(data))
}

function* handleDeleteProductFromCart(action) {
  const { data } = yield axios.delete('http://localhost:3005/cart/delete', { params: { cid: action.payload } })
  // 删除本地 cart 中商品
  yield put(deleteProductFromLocalCart(data.index))
}

function* handleChangeServiceProductNumber(action) {
  const { data } = yield axios.put('http://localhost:3005/cart', action.payload)
  // 修改本地商品数量
  yield put(changeLocalProductNumber(data))
}

export default function* cartSaga() {
  // 添加商品到购物车
  yield takeEvery(addProductToCart, handleAddProductToCart)
  // 请求获取购物车列表
  yield takeEvery(loadCarts, handleLoadCarts)
  // 请求删除商品
  yield takeEvery(deleteProductFromCart, handleDeleteProductFromCart)
  // 请求修改商品数量
  yield takeEvery(changeServiceProductNumber, handleChangeServiceProductNumber)
}
