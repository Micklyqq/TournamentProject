module.exports = function (schema) {
  return function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: "Validation error",
        errorInfo: {
          message: error.details[0].message,
          path: error.details[0].path,
        },
      });
    }
    next();
  };
};
