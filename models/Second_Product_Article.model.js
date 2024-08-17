module.exports = (sequelize, Sequelize) =>{
    const Product = sequelize.define("secondarticle",{
        article:{
            type:Sequelize.STRING
        },
        name:{
            type: Sequelize.STRING
        },
        imagePATH:{
            type: Sequelize.STRING
        },
        amount:{
            type: Sequelize.INTEGER
        }
    })

    return Product;
}