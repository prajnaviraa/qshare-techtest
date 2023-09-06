const express = require("express");
const router = express();
const UserController = require("../controllers/users.js");

router.post("/login", UserController.login);
router.post("/register", UserController.register);

module.exports = router;
