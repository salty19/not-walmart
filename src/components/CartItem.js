import React from 'react'

const CartItem = (props) => {
  return (
    <div className="cart-item">
      <div>
        <div className="button-hold">
          <button>-</button>
          <button>Remove</button>
          <button>+</button>
        </div>
      </div>
    </div>
  )
}
export default CartItem
