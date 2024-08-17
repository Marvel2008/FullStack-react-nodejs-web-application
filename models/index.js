//Ініціалізація Sequelize

const config = require("../config/bd.config.js")

const Sequelize = require("sequelize")

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }

)

const db={}

db.Sequelize=Sequelize
db.sequelize=sequelize

db.user = require("./user.model.js")(sequelize,Sequelize)
// db.product = require("./product.model.js")(sequelize,Sequelize)
db.firstArticle = require("./First_Product_Article.model.js")(sequelize,Sequelize)
db.secondArticle = require("./Second_Product_Article.model.js")(sequelize,Sequelize)
db.thirdArticle = require("./Third_Product_Article.model.js")(sequelize,Sequelize)
db.fourthArticle = require("./Fourth_Product_Article.model.js")(sequelize,Sequelize)

module.exports = db;