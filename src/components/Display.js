import React, { Component } from 'react'
import Products from './Products'
import Cart from './Cart'

class Display extends Component {
  constructor() {
    super()
    this.state = {
      products: [],
      cart: { total: 0, items: [] },
    }
  }

  componentDidMount() {}

  addToCart(id, quantity) {}

  changeQuantity(id, action) {}

  removeFromCart(id) {}

  checkout() {}

  render() {
    return (
      <div className="display">
        <Products />
        <Cart />
      </div>
    )
  }
}
export default Display
