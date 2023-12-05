const Joi = require("joi");

const joiSchema = Joi.object({
  name: Joi.string().min(4).required(),
  phone: Joi.string().required(),
});

module.exports = { joiSchema };
