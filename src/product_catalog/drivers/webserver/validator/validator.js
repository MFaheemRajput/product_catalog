const Joi = require('joi');
const ProductSchema = require('../../schema/product_schema');
const schema = Joi.object().keys(ProductSchema);

module.exports = {
    schema,
};