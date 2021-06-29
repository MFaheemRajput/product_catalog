"use strict";
const express = require("express");
const route = express.Router();
const HttpStatusCode  = require("../../../../utils/http_status_code").Code;
const productController = require('../controllers/product_controller');
// Route for Delete Product
route.route("/:id").delete(async (req, res) => {
    try {
        // check if the id is valid guid
        const products = await productController.deleteProduct(req.params.id);  
        return res.status(HttpStatusCode.OK).send(JSON.stringify({"Message":"Product deleted successfully"}));
    }
    catch(error){
      // convert error into response  
      res.sendStatus("error: " +error);
    }
  });

module.exports = {
  route,
};
