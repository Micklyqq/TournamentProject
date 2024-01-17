const ApiError = require("../error/ApiError");
const jwt = require("jsonwebtoken");
const { Role } = require("../models/model");

module.exports = function (role) {
  return async function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }

    try {
      const roleId = await Role.findOne({ where: { name: role } });
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        next(ApiError.unauthorized("Не авторизован"));
      }
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      const findRole = decoded.roleId.includes(roleId.id);
      if (!findRole) {
        return next(ApiError.forbidden("Доступ запрещен"));
      }
      req.user = decoded;
      next();
    } catch (e) {
      return next(ApiError.unauthorized("Не авторизован"));
    }
  };
};
