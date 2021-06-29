"use strict";
const express = require("express");
const route = express.Router();
const joi = require('joi');
const HttpStatusCode  = require("../../../../utils/http_status_code").Code;
const productController = require('../controllers/product_controller');
// Route for Get list of Products
route.route("/").get(async (req, res) => {
    try {
        const products = await productController.getProducts();  
        console.log("products: "+products);
        return res.status(HttpStatusCode.OK).send(JSON.stringify(products));
    }
    catch(error){
      // convert error into response  
      res.sendStatus("error: " +error);
    }
  });

module.exports = {
  route,
};
