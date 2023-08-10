const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const secretAccessKey = process.env.JWT_SECRET_CODE;

  var token = req.headers["x-access-token"];

  if (!token) {
    req.authenticated = false;
    next();
  } else {
    jwt.verify(token, secretAccessKey, function (err, decoded) {
      if (err) {
        req.authenticated = false;
      } else {
        req.authenticated = true;
        req.userId = decoded.Id;
      }
      next();
    });
  }
}

module.exports = verifyToken;
