const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')

const products = require('./data/products.json')
const orders = require('./data/orders.json')

const port = 7790
const hostUrl = `http://localhost:${port}`

app.use(express.json())
app.use('/images', express.static('images'))
app.use(cors())

app.get('/', (req, res) => {
    return res.send('Hello World!')
})

app.get('/products/:id', (req, res) => {
    const idParam = parseInt(req.params.id)

    const product = products.find(p => p.id === idParam)

    if (!product) {
        return res.status(404).json({ message: 'Product not found' })
    }

    let transformedProduct = { ...product }
    transformedProduct.image = `${hostUrl}/images/${product.image}`

    return res.json(transformedProduct)
})

app.get('/products', (req, res) => {
    let transformedProducts = [...products]

    transformedProducts = transformedProducts.map(product => {
        return {
            id: product.id,
            title: product.title,
            description: product.description,
            colors: product.colors,
            sizes: product.sizes,
            image: `${hostUrl}/images/${product.image}`,
            priceMin: Math.min(...product.prices.map(p => p.price)),
            priceMax: Math.max(...product.prices.map(p => p.price)),
        }
    })

    res.json(transformedProducts)
})

app.post('/cart', (req, res) => {
    const { cartProducts } = req.body

    if (!cartProducts || !Array.isArray(cartProducts)) {
        return res.status(400).json({ message: 'Bad request' })
    }

    const productsInCart = cartProducts.map(id => {
        const product = products.find(p => p.id === id)
        return {
            id: product.id,
            title: product.title,
            price: product.price,
        }
    })

    return res.json(productsInCart)
})

app.post('/orders/create', (req, res) => {
    // const { products: productsIds } = req.body

    // if (!productsIds || !Array.isArray(productsIds)) {
    //     return res.status(400).json({ message: 'Bad request' })
    // }

    // const order = {
    //     id: orders.length + 1,
    //     products: productsIds.map(id => {
    //         const product = products.find(p => p.id === id)
    //         return {
    //             id: product.id,
    //             title: product.title,
    //             price: product.price,
    //         }
    //     }),
    //     totalPrice: productsIds.reduce((acc, id) => {
    //         const product = products.find(p => p.id === id)
    //         return acc + product.price
    //     }, 0),
    //     date: new Date().toISOString(),
    // }

    // orders.push(order)

    // fs.writeFileSync('./data/orders.json', JSON.stringify(orders, null, 2))

    // return res.json(order)
})

app.listen(port, () => {
    console.log(`Marskineliu parduotuve API klauso port: ${port}`)
})
