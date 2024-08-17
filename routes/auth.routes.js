const {verifySignUp} = require('../middleware')
const controller = require("../controllers/auth.controller")

module.exports = function(app) {
  
    app.post(
      "/signup",
      [
        verifySignUp.checkDuplicateUsernameOrEmail,
      ],
      controller.signup
    );
  
    app.post("/signin", controller.signin);

  };