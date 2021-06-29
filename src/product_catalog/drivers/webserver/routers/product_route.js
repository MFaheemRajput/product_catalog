"use strict";
const express = require("express");
const route = express.Router();
const joi = require('joi');
const HttpStatusCode  = require("../../../../utils/http_status_code").Code;
const productController = require('../controllers/product_controller');
// Route for Get Product
route.route("/:id").get(async (req, res) => {
    try {
        const product = await productController.getProduct(req.params.id);
        return res.status(HttpStatusCode.OK).send(JSON.stringify(product));
    }
    catch(error){
      // convert error into response
      res.status(HttpStatusCode.NOT_FOUND).send(JSON.stringify(error));  
      
    }
  });

module.exports = {
  route,
};
