import React from 'react'
import Product from './Product'

const Products = (props) => {
  return (
    <div className="products">
      {props.products.map((element) => (
        <Product addToCart={props.addToCart} key={element.id} data={element} />
      ))}
    </div>
  )
}
export default Products
