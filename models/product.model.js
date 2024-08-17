
module.exports = (sequelize, Sequelize) =>{
    const Product = sequelize.define("products",{
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
        amount:{
            type: Sequelize.SMALLINT
        },
        color:{
            type: Sequelize.STRING
        },
        protection:{
            type: Sequelize.STRING
        },
        care:{
            type: Sequelize.STRING
        },
        data_button:{
            type: Sequelize.STRING
        }
    })

    return Product;
}