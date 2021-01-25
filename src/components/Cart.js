/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cartActions from '../store/actions/cart.action'

class Cart extends Component {
  componentDidMount() {
    const { loadCarts } = this.props
    // 请求获取购物车列表
    loadCarts()
  }
  changeProductNumber(cid, event) {
    // 获取商品的最新数量
    const count = event.target.value
    // 请求修改商品数量
    const { changeServiceProductNumber } = this.props
    changeServiceProductNumber({ cid, count })
  }
  render() {
    const { carts, deleteProductFromCart } = this.props
    return (
      <section className="container content-section">
        <h2 className="section-header">购物车</h2>
        <div className="cart-row">
          <span className="cart-item cart-header cart-column">商品</span>
          <span className="cart-price cart-header cart-column">价格</span>
          <span className="cart-quantity cart-header cart-column">数量</span>
        </div>
        <div className="cart-items">
          {carts.map((p) => (
            <div className="cart-row" key={p.id}>
              <div className="cart-item cart-column">
                <img className="cart-item-image" src={`http://localhost:3005${p.thumbnail}`} width="100" height="100" />
                <span className="cart-item-title">{p.title}</span>
              </div>
              <span className="cart-price cart-column">￥{p.price}</span>
              <div className="cart-quantity cart-column">
                <input
                  className="cart-quantity-input"
                  type="number"
                  value={p.count}
                  onChange={(e) => this.changeProductNumber(p.id, e)}
                />
                <button className="btn btn-danger" type="button" onClick={() => deleteProductFromCart(p.id)}>
                  删除
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-total">
          <strong className="cart-total-title">总价</strong>
          <span className="cart-total-price">￥{carts.reduce((acc, p) => (acc += p.price * p.count), 0)}</span>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  carts: state.carts,
})

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(cartActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
