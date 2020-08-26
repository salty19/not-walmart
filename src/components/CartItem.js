import React from 'react'

const CartItem = (props) => {
  return (
    <div className="cart-item">
      <img src={props.data.image} alt={props.data.name} />
      <div>
        <p>{props.data.name}</p>
        <p>{props.data.quantity}</p>
        <p>{props.data.price}</p>
        <div className="button-hold">
          <button
            onClick={() => props.changeQuantity(props.data.cart_id, 'down')}
          >
            -
          </button>
          <button onClick={() => props.removeFromCart(props.data.cart_id)}>
            Remove
          </button>
          <button
            onClick={() => props.changeQuantity(props.data.cart_id, 'up')}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}
export default CartItem
