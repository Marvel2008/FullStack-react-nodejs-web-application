const controller = require("../controllers/cart.controller")
const db = require("../models")
var Cart = require('../models/cart.model')
var Product = db.product
module.exports = function (app) {

    app.get('/add-to-cart/:id', async function (req, res) {
        const productId = req.params.id;
        const cart = new Cart(req.session.cart ? req.session.cart : {});
        console.log("Previous cart", cart)
        try {
            const product = await Product.findOne({ where: { id: productId } });
            if (!product) {
                return res.redirect('/');
            }
            cart.add(product, product.id);
            req.session.cart = cart;
            // req.session.save()
            res.sendStatus(200)
        } catch (err) {
            res.sendStatus(400)
        }
    });
    app.get('/selectedgoods', controller.selectedgoods)

    app.get('/first_article', controller.firstArticle)
    // app.get('/second_article', controller.secondArticle)
    // app.get('/third_article', controller.thirdArticle)
    // app.get('/fourth_article', controller.fourthArticle)

    app.get('/api/session', (req, res) => {
        if (req.session.cart) {
            res.json({ session: req.session.cart });
        } else {
            res.status(404).json({ error: 'Session not found' });
        }
    });

}