import { handleActions as createReducer } from 'redux-actions'
import { saveProducts } from '../actions/product.action'

const initialState = []

const handleSaveProducts = (state, action) => action.payload

export default createReducer(
  {
    // 将商品列表数据保存到本地 store 容器中
    [saveProducts]: handleSaveProducts,
  },
  initialState,
)
