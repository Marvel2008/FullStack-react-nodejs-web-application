module.exports = (sequelize, Sequelize) =>{
    const Product = sequelize.define("firstarticle",{
        article:{
            type:Sequelize.STRING
        },
        name:{
            type: Sequelize.STRING
        },
        imagePATH:{
            type: Sequelize.STRING
        },
    })

    return Product;
}