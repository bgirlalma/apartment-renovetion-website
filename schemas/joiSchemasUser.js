const Joi = require("joi");

const joiSchema = Joi.object({
  name: Joi.string().min(4).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

module.exports = { joiSchema };
