const products = require('../data.json')

const cart = {total: 0, items: []}
let cartId = 0

module.exports = {
    getCart: (req, res) => {
        res.status(200).send(cart)
    },

    addToCart: (req, res) => {
        const {productId, quantity} = req.body

        const index = cart.items.findIndex(element => element.id === +productId) 

        if(index === -1) {
            const product = products.find(element => element.id === +productId)

            product.cartId = cartId
            product.quantity = +quantity 

            cart.items.push(product)

            cartId++
        } else {
        cart.items[index].quantity += +quantity 
        }

        const total = cart.items.reduce((acc, element) => {
            return acc + element.price * element.quantity
        }, 0)

        cart.total = total 

        res.status(200).send(cart) 
    },

    changeQuantity: (req, res) => {},
    removeFromCart: (req, res) => {},
    checkout: (req, res) => {},
}