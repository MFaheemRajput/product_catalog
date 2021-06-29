"use strict";
const express = require("express");
const productsRoute = require('./src/product_catalog/drivers/webserver/routers/product_list_route');
const productDeleteRoute = require('./src/product_catalog/drivers/webserver/routers/product_delete_route');
const productRoute = require('./src/product_catalog/drivers/webserver/routers/product_route');
const app = express();
// Start the server
const PORT = process.env.PORT || 8080;

app.use("/Product", productRoute.route);
app.use("/products", productsRoute.route);
app.use("/Product", productDeleteRoute.route);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});


