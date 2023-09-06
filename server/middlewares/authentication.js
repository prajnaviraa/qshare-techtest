const { decodeToken } = require("../helpers/jwt.js");
const { User } = require("../models/index.js");

async function authentication(req, res, next) {
  try {
    let { access_token } = req.headers;
    // console.log(access_token);
    if (!access_token) throw { name: "AccessTokenMissing" };

    let payload = decodeToken(access_token);

    let user = await User.findByPk(payload.id);
    if (!user) throw { name: "InvalidToken" };

    req.user = {
      id: user.id,
      username: user.username,
    };
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authentication;
