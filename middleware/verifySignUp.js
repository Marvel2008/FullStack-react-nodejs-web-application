const db = require("../models")

const User = db.user;

checkDuplicateUsernameOrEmail = async (req, res, next) => {
    try {
        // await User.findOne({
        //     where: {
        //         username: req.body.username
        //     }
        // }).then(user => {
        //     if (user) {
        //         return res.status(400).send({
        //             message: "Failed! Username is already in use!"
        //         });
        //     }
        // })


        console.log("Check dublicates")
        await User.findOne({
            where: {
                email: req.body.email
            }
        }).then(email => {
            if(email) {
                return res.status(400).send({
                    message: "Failed! Email is already in use!"
                });
            }
        })
        next();
    } catch (error) {
        res.status(400).send({
            message: "Error occurred while checking username or email"
        });
    }
}


module.exports = {checkDuplicateUsernameOrEmail}//Огорнув метод у фігурні дужки і немає помилки щодо метода Post