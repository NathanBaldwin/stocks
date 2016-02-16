'use strict'

const request = require('request');

module.exports.getStock = () => {
   console.log("I see the getStock controller!");
   request.get("http://dev.markitondemand.com/MODApis/Api/Quote/json?symbol=aapl", (err, response, data) => {
    console.log(JSON.parse(data));
   });
}


