const express = require('express')
const app = express()
const SERVER_PORT = 5000
const productsCtrl = require('./controllers/productsController')
const cartCtrl = require('./controllers/cartController')

app.use(express.json())

//* Products endpoints
app.get('/api/products', productsCtrl.getAllProducts)

//* Cart endpoints
app.get('/api/cart', cartCtrl.getCart)
app.post('/api/cart', cartCtrl.addToCart)
app.put('/api/cart/:cart_id', cartCtrl.changeQuantity)
app.delete('/api/cart/:cart_id', cartCtrl.removeFromCart)
app.delete('/api/cart', cartCtrl.checkout)

app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))
