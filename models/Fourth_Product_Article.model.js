
module.exports = (sequelize, Sequelize) =>{
    const Product = sequelize.define("fourtharticle",{
        article:{
            type:Sequelize.STRING
        },
        amount:{
            type: Sequelize.SMALLINT
        },
        color:{
            type: Sequelize.STRING
        },
    })

    return Product;
}