import React, { Component } from 'react'
import Products from './Products'
import Cart from './Cart'
import axios from 'axios'

class Display extends Component {
  constructor() {
    super()
    this.state = {
      products: [],
      cart: { total: 0, items: [] },
    }

    this.addToCart = this.addToCart.bind(this)
    this.changeQuantity = this.changeQuantity.bind(this)
    this.removeFromCart = this.removeFromCart.bind(this)
    this.checkout = this.checkout.bind(this)
  }

  componentDidMount() {
    axios.get('/api/products').then((res) => {
      axios.get('/api/cart').then((cartRes) => {
        this.setState({
          products: res.data,
          cart: cartRes.data,
        })
      })
    })
  }

  addToCart(id, quantity) {
    axios.post('/api/cart', { product_id: id, quantity }).then((res) => {
      this.setState({
        cart: res.data,
      })
    })
  }

  changeQuantity(id, action) {
    axios.put(`/api/cart/${id}?action=${action}`).then((res) => {
      this.setState({
        cart: res.data,
      })
    })
  }

  removeFromCart(id) {
    axios.delete(`/api/cart/${id}`).then((res) => {
      this.setState({
        cart: res.data,
      })
    })
  }

  checkout() {
    axios.delete('/api/cart').then((res) => {
      this.setState({
        cart: res.data,
      })
    })
  }

  render() {
    return (
      <div className="display">
        <Products addToCart={this.addToCart} products={this.state.products} />
        <Cart
          cart={this.state.cart}
          changeQuantity={this.changeQuantity}
          removeFromCart={this.removeFromCart}
          checkout={this.checkout}
        />
      </div>
    )
  }
}
export default Display
