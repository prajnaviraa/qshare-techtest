const express = require("express");
const router = express();
const ProductController = require("../controllers/products.js");
const authentication = require("../middlewares/authentication.js");

router.use(authentication);
router.get("/", ProductController.getAllOrders);
router.post("/", ProductController.addOrder);

module.exports = router;
