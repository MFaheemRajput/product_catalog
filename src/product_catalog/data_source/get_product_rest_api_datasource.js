"use strict";
const https = require('https');
const url = require('url');
var request = require('superagent');
require('superagent-as-promised')(request);

const getProductFromServer = async ( url ) => { 
  try{
      const res = await request.get(url);
      return res.text;
   } catch (error){
      console.log("error: " , error); 
      // single place to handle logging error 
      throw error;
   }
}
module.exports = {
    getProductFromServer,
}