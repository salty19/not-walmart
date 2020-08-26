import React, { Component } from 'react'

class Product extends Component {
  constructor() {
    super()
    this.state = {
      quantity: 0,
    }
  }

  handleQuantityChange(action) {}

  handleAddToCart() {}

  render() {
    return (
      <div className="product">
        <div className="button-hold">
          <button>Quantity -</button>

          <button>Quantity +</button>
        </div>
      </div>
    )
  }
}
export default Product
