
const { Op } = require("sequelize");
const db = require("../models");
const Product = db.product;
const Firstarticle = db.firstArticle
const Secondarticle = db.secondArticle
const Thirdarticle = db.thirdArticle
const Fourtharticle = db.fourthArticle

exports.selectedgoods = async (req, res) => {
    try {
        console.log("Processing request");
        let products = await Product.findAll();
        let responseData = products.map(product => product.dataValues);
        // console.log(responseData);
        res.status(200).json({
            data: responseData
        })
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.firstArticle = async (req, res) => {
    try {
        console.log("Processing request");
        let products = await Firstarticle.findAll();
        let responseData = products.map(product => product.dataValues);//Щоб отримати чисті дані з бд, а не об'єкти класу
        // console.log(responseData);
        res.status(200).json({
            data: responseData
        })
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

exports.secondarticle = async (req, res) => {
    const goodarticle = req.params.article
    try {
        let products = await Secondarticle.findAll({
            where: {
                article: {
                    [Op.like]: `${goodarticle}%`
                }
            }
        })
        let responseData = products.map(product => product.dataValues)
        res.status(200).json({
            data: responseData
        })
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

exports.thirdArticle = async (req, res) => {
    const goodarticle = req.params.article
    try {
        let products = await Thirdarticle.findAll({
            where: {
                article: {
                    [Op.like]: `${goodarticle}%`
                }
            }
        })
        let responseData = products.map(product => product.dataValues)
        res.status(200).json({
            data: responseData
        })
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

exports.fourthArticle = async (req, res) => {
    const goodarticle = req.params.active
    try {
        let products = await Fourtharticle.findAll({
            where: {
                article: {
                    [Op.like]: `${goodarticle}%`
                }
            }
        })
        let responseData = products.map(product => product.dataValues)
        res.status(200).json({
            data: responseData
        })
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
