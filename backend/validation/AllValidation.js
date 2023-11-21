const Joi = require("joi");
const createUser = Joi.object().keys({
  id: Joi.number().optional(),
  name: Joi.string().required(),
  number: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const fatchUser = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

module.exports = { createUser, fatchUser };
