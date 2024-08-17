module.exports = (sequelize, Sequelize) =>{
    const Product = sequelize.define("firstarticles",{
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