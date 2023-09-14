const mongoose = require("mongoose");
const Joi = require("joi");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  offerPrice: {
    type: Number,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  category: {
    type: String,
    required: true,
  },
  size: {
    type: [String],
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

const validate = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().label("Product Name"),
    price: Joi.number().required().label("Price"),
    offerPrice: Joi.number().optional().label("Offer Price"),
    description: Joi.string().required().label("Description"),
    image: Joi.string().label("product Image"),
    quantity: Joi.number().optional().label("Quantity"),
    category: Joi.string().required().label("Category"),
    size: Joi.array().required().label("Size"),
    tags: Joi.string().required().label("Tags"),
  });
  return schema.validate(data);
};

module.exports = { Product, validate };
