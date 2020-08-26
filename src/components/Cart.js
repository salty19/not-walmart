import React from 'react'
import CartItem from './CartItem'

const Cart = (props) => {
  return (
    <div className="cart">
      {props.cart.items.map((element) => (
        <CartItem key={element.cart_id} data={element} />
      ))}
    </div>
  )
}
export default Cart
