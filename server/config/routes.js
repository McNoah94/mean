const controller = require('../controllers/controller.js')
const path = require('path')

module.exports = function(app) {
    app.get('/', (req,res) => {
        res.sendFile(path.resolve('./public/src/index.html'))
    })
    app.get('/api/products', controller.products)

    app.post('/api/products',controller.addProduct)

    app.delete('/api/products/:id', controller.delete)

    app.get('/api/products/:id', controller.show)

    app.put('/api/products/:id', controller.update)

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve('./public/dist/public/index.html'))
    })
}
