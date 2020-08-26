const products = require('../data.json')

const cart = { total: 0, items: [] }
let cart_id = 0

const updateCartTotal = () => {
  const total = cart.items.reduce((acc, element) => {
    return (acc += element.price * element.quantity)
  }, 0)

  cart.total = total.toFixed(2)
}

module.exports = {
  getCart: (req, res) => {
    res.status(200).send(cart)
  },
  addToCart: (req, res) => {
    //* body should contain product_id and quantity
    const { product_id, quantity } = req.body

    const index = cart.items.findIndex((element) => element.id === +product_id)

    if (index === -1) {
      const product = products.find((element) => element.id === +product_id)

      if (!product) {
        return res.status(404).send('Invalid product')
      }

      product.quantity = quantity
      product.cart_id = cart_id

      cart.items.push(product)

      cart_id++
    } else {
      cart.items[index].quantity += quantity
    }

    updateCartTotal()
    res.status(200).send(cart)
  },
  changeQuantity: (req, res) => {
    const { cart_id } = req.params

    //* Action should be "up" or "down"
    const { action } = req.query

    const index = cart.items.findIndex(
      (element) => element.cart_id === +cart_id
    )

    if (index === -1) {
      return res.status(404).send('Item not in cart')
    }

    if (action === 'up') {
      cart.items[index].quantity += 1
    } else {
      if (cart.items[index].quantity > 1) {
        cart.items[index].quantity -= 1
      } else {
        cart.items.splice(index)
      }
    }

    updateCartTotal()

    res.status(200).send(cart)
  },
  removeFromCart: (req, res) => {
    const { cart_id } = req.params

    const index = cart.items.findIndex(
      (element) => element.cart_id === +cart_id
    )

    if (index === -1) {
      return res.status(404).send('Item not in cart')
    }

    cart.items.splice(index, 1)

    updateCartTotal()

    res.status(200).send(cart)
  },
  checkout: (req, res) => {
    cart.total = 0
    cart.items = []

    res.status(200).send(cart)
  },
}
