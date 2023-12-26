const Joi = require("joi");

userValidation = Joi.object({
  email: Joi.string().min(4).max(100).required().email(),
  password: Joi.string().min(4).max(100).required(),
});

module.exports = userValidation;
