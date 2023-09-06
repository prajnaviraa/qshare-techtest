const bcrypt = require("bcryptjs");

const hashPassword = (password) => {
  return bcrypt.hashSync(password);
};

const compareHash = (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword);
};

module.exports = {
  hashPassword,
  compareHash,
};
