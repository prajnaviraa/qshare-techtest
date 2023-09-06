const express = require("express");
const router = express();
const errorHandler = require("../middlewares/errorHandler.js");
const usersRouter = require("./users.js");
const productsRouter = require("./products.js");

router.use("/orders", productsRouter);
router.use("/users", usersRouter);
router.use(errorHandler);

module.exports = router;
