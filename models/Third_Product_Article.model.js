module.exports = (sequelize, Sequelize) =>{
    const Product = sequelize.define("thirdarticle",{
        article:{
            type:Sequelize.STRING
        },
        name:{
            type: Sequelize.STRING
        },
        imagePATH:{
            type: Sequelize.STRING
        },
        material:{
            type: Sequelize.STRING
        },
        producer:{
            type: Sequelize.STRING
        },
        price:{
            type: Sequelize.INTEGER
        },
        protection:{
            type: Sequelize.STRING
        },
        care:{
            type: Sequelize.STRING
        },
    })

    return Product;
}