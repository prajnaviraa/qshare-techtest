const { User } = require("../models");
const { compareHash } = require("../helpers/bcrypt");
const { encodeToken } = require("../helpers/jwt");

class UserController {
  static async register(req, res, next) {
    let { username, email, password } = req.body;
    try {
      let newUser = await User.create({
        username,
        email,
        password,
      });

      res.status(201).json({ id: newUser.id, email: newUser.email });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    const { email, password } = req.body;
    try {
      if (!email) {
        throw { name: "MissingEmail" };
      }

      if (!password) {
        throw { name: "MissingPassword" };
      }

      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw { name: "Unauthorized" };
      }

      const isCorrectPassword = compareHash(password, user.password);
      if (!isCorrectPassword) {
        throw { name: "Unauthorized" };
      }

      const token = encodeToken({ id: user.id });
      res.status(200).json({
        access_token: token,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
