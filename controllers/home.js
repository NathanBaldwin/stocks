'use strict'

const express = require('express');
const request = require('request');
const homeMod = require('../models/home.js');

module.exports.getStock = (symbol, res) => {
   console.log("I see the getStock controller!");
   const url = `http://dev.markitondemand.com/MODApis/Api/Quote/json?symbol=${symbol}`
   request.get(url, (err, response, data) => {
    console.log(JSON.parse(data));

    let apiResponse = JSON.parse(data);
    let price = apiResponse.Data.LastPrice;
    let coName = apiResponse.Data.Name;

    console.log("price:", price);

    let stockData = {
      price: price,
      coName: coName
    }

    console.log("stockData", stockData);
  
    const stockQuery = new homeMod.priceQuery(stockData);

    stockQuery.save((err, _stockQuerry) => {
      if (err) throw err;

      console.log("_stockQuerry", _stockQuerry);
    });

    res.render('requestedQuote', {
      company: stockData.coName,
      price: stockData.price
      }
    )
  });
}


