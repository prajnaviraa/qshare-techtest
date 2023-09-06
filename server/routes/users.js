const express = require("express");
const router = express();
const UserController = require("../controllers/users.js");
const authentication = require("../middlewares/authentication.js");

router.post("/login", UserController.login);
router.post("/register", authentication, UserController.register);

module.exports = router;
