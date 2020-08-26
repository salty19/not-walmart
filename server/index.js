const express = require('express')
const app = express()
const SERVER_PORT = 5000
const productsCtrl = require('./controllers/productsController')
const cartCtrl = require('./controllers/cartController')

let port = process.env.PORT
if (port == null || port == '') {
  port = SERVER_PORT
}

app.use(express.json())

app.use(express.static(`${__dirname}/../build`))

//* Products endpoints
app.get('/api/products', productsCtrl.getAllProducts)

//* Cart endpoints
app.get('/api/cart', cartCtrl.getCart)
app.post('/api/cart', cartCtrl.addToCart)
app.put('/api/cart/:cart_id', cartCtrl.changeQuantity)
app.delete('/api/cart/:cart_id', cartCtrl.removeFromCart)
app.delete('/api/cart', cartCtrl.checkout)

app.listen(port, () => console.log(`listening on port ${port}`))
