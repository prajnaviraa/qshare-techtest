module.exports = (error, req, res, next) => {
  console.log(error);
  let status;
  let message;

  switch (error.name) {
    case "SequelizeValidationError":
      status = 400;
      message = error.errors.map((el) => el.message);
      break;

    case "SequelizeUniqueConstraintError":
      status = 400;
      message = error.errors.map((el) => el.message);
      break;

    case "MissingUsername":
      status = 400;
      message = "Please input Username";
      break;

    case "MissingEmail":
      status = 400;
      message = "Please input Email";
      break;

    case "MissingPassword":
      status = 400;
      message = "Please input Password";
      break;

    case "Unauthorized":
      status = 401;
      message = "Wrong email or password";
      break;

    case "AccessTokenMissing":
      status = 400;
      message = "Access Token Missing";
      break;

    case "InvalidToken":
    case "JsonWebTokenError":
      status = 401;
      message = "Invalid Token";
      break;

    case "NotFound":
      status = 404;
      message = "Data not found";
      break;

    case "Forbidden":
      status = 403;
      message = "You are not permitted";
      break;

    default:
      status = 500;
      message = "Internal Server Error";
      break;
  }

  res.status(status).json({ message: message });
};
