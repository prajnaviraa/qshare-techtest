const { Product } = require("../models");
const { Op } = require("sequelize");

class ProductController {
  static async getAllOrders(req, res, next) {
    let userId = req.user.id;
    try {
      let orders = await Product.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        where: {
          UserId: {
            [Op.eq]: userId,
          },
        },
      });
      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }

  static async addOrder(req, res, next) {
    let { name, quantity, price } = req.body;
    let userId = req.user.id;
    try {
      let newOrder = await Product.create({
        name,
        quantity,
        price,
        UserId: userId,
      });
      res.status(201).json(newOrder);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductController;
