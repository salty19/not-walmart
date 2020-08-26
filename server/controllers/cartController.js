const cart = { total: 0, items: [] }
const cart_id = 0

const updateCartTotal = () => {
  const total = cart.items.reduce((acc, element) => {
    return (acc += element.price * element.quantity)
  }, 0)

  cart.total = total
}

module.exports = {
  getCart: (req, res) => {
    res.status(200).send(cart)
  },
  addToCart: (req, res) => {
    //* body should contain id, name, image, price, and quantity
    const { product } = req.body

    const index = cart.findIndex((element) => element.id === +product.id)

    if (index === -1) {
      product.cart_id = cart_id

      cart.push(product)

      cart_id++
    } else {
      cart[index].quantity += product.quantity
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
      cart.items[index].quantity -= 1
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
