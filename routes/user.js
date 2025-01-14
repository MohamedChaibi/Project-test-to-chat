// 1- require express
const express = require("express"); 
const { register, login } = require("../controllers/user");
const isAuth = require("../middleware/isAuth");

// 2- instance router 
const router = express.Router();

//  register route
router.post("/register", register);

// login route
router.post("/login", login );

// current user
router.get("/current", isAuth, (req, res) => {
res.send(req.user);
})

// export
module.exports = router; 