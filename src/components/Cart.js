import React from 'react'
import CartItem from './CartItem'

const Cart = (props) => {
  return (
    <div className="cart-container">
      <div className="cart">
        <h2>Your Cart</h2>
        {/*.map goes here */}
      </div>
      <div className="total">
        Your total:
        <button>Checkout</button>
      </div>
    </div>
  )
}
export default Cart
