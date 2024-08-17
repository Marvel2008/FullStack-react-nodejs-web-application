// const db = require("../models");
// const Product = db.product;

// exports.selectedgoods = async (req, res) => {
//     try {
//         console.log("Processing request");
//         let products = await Product.findAll();
//         console.log(products);
//         res.json(products);
//     } catch (error) {
//         console.error("Error fetching products:", error);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };
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
            data:responseData
        })
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.firstArticle = async (req,res) =>{
    try {
        console.log("Processing request");
        let products = await Firstarticle.findAll();
        let responseData = products.map(product => product.dataValues);
        // console.log(responseData);
        res.status(200).json({
            data:responseData
        })
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
