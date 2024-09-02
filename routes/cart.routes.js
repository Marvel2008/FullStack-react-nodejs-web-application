const controller = require("../controllers/cart.controller")
const db = require("../models")
var Cart = require('../models/cart.model')
var Product = db.product
module.exports = function (app) {

    app.post('/add-to-cart', async function (req, res,next) {
        
        const cart = new Cart(req.session.cart ? req.session.cart : {});
        console.log("Previous cart", cart)
        console.log("Received data from front", req.body)
        try {
            cart.add(req.body, req.body.article);
            req.session.cart = cart;
            // req.session.save()
            console.log(req.session.cart)
            res.sendStatus(200)
        } catch (err) {
            res.sendStatus(400)
        }
    });
    app.get('/shopping-cart', function(req,res,next){
        if(!req.session.cart){
            res.status(200).json({products: 'No goods'})
        }
        var cart = new Cart(req.session.cart)
        res.status(200).json({products: cart.generateArray()})
    })
    app.get('/selectedgoods', controller.selectedgoods)

    app.get('/first_article', controller.firstArticle)
    app.get('/second_article/:article', controller.secondarticle)
    app.get('/third_article/:article', controller.thirdArticle)
    app.get('/fourth_article/:active', controller.fourthArticle)

    app.get('/api/session', (req, res) => {
        if (req.session.cart) {
            res.json({ session: req.session.cart });
        } else {
            res.status(404).json({ error: 'Session not found' });
        }
    });

}