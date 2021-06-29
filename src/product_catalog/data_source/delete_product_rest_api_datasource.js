"use strict";
const https = require('https');
const url = require('url');
var request = require('superagent');
require('superagent-as-promised')(request);

const deleteProductFromServer = async ( url ) => { 
  try{
      const res = await request.delete(url);
      return res.text
   } catch (error){
      // single place to handle logging error 
      throw error;
   }
}
module.exports = {
    deleteProductFromServer,
}