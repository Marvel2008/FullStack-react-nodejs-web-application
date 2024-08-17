const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    console.log("Working")
    // Save User to Database
    User.create({
        email: req.body.email,
        phonenumber: req.body.phone_number,
        password: bcrypt.hashSync(req.body.password, 8)
    })
        .then(user => {
            res.status(201).send({ message: "User registered successfully!" })
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        })
}

exports.signin = (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }

            const token = jwt.sign({ id: user.id },
                config.secret,
                {
                    algorithm: 'HS256',
                    allowInsecureKeySizes: true,
                    expiresIn: 10, 
                });
                res.cookie("access_token", token,{
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production", //Якщо додаток працює в режимі production, то кукі буде передаватися в https
                }).status(200)
                .json({message: "Logged in successfully!"})
                // res.status(201).send("Succes!");
                // localStorage.setItem('x-user-token',token)
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        })
}