const Joi = require("joi");

const joiSchemasUser = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().required(),
  phone: Joi.string().min(5).required(),
});

module.exports = { joiSchemasUser };
