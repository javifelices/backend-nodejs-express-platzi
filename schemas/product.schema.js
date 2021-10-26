const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().trim().min(3).max(15);
const price = Joi.number().integer().min(5);
const image = Joi.string().uri();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required()
});

const getProductSchema = Joi.object({
  id: id.required()
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image
});

module.exports = { createProductSchema, getProductSchema, updateProductSchema };
