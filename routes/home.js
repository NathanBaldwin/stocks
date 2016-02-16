'use strict'

const express = require('express');
const router = express.Router();

const homeCtrl = require('../controllers/home');

router.get('/', (req, res) => {
  res.render('home');
})

router.post('/', (req, res) => {
  //retrieving user's requested stock symbol from form:
  let symbol = req.body.stockSymbol;

  //invoke method on homeCtrl to make api call, passing user's specified symbol:
  homeCtrl.getStock(symbol, res);
})

module.exports = router;
