const jwt = require("jsonwebtoken")
const config = require("../config/auth.config")



verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];//Отримуємо токен з заголовку де зберігається
  
    if (!token) {
      return res.status(403).send({
        message: "No token provided!"
      });
    }
  
    jwt.verify(token, //Перевірка валідності токена
              config.secret, //Серетний ключ для підпису та верифікації токена
              (err, decoded) => {
                if (err) {
                  return res.status(401).send({
                    message: "Unauthorized!",
                  });
                }
                req.userId = decoded.id;//decoded.id- містить id користувача, який був закодований у токені під час створення
                next();
              });
  };//Дозволяє продовжувати виконувати операції після успішної перевірки токена на присутність та валідність

  
const authJwt = {
    verifyToken: verifyToken,
  };
  module.exports = authJwt;