/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productActions from '../store/actions/product.action'
import * as cartActions from '../store/actions/cart.action'

class Product extends Component {
  componentDidMount() {
    const { loadProducts } = this.props
    // 向服务器端请求商品列表数据
    loadProducts()
  }
  render() {
    const { products, addProductToCart } = this.props
    return (
      <section className="container content-section">
        <h2 className="section-header">商品列表</h2>
        <div className="shop-items">
          {products.map((p) => (
            <div key={p.id} className="shop-item">
              <img className="shop-item-image" src={p.thumbnail} />
              <span className="shop-item-title">{p.title}</span>
              <div className="shop-item-details">
                <span className="shop-item-price">￥{p.price}</span>
                <button
                  className="btn btn-primary shop-item-button"
                  type="button"
                  onClick={() => addProductToCart(p.id)}
                >
                  加入购物车
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
})

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(productActions, dispatch),
  ...bindActionCreators(cartActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)
