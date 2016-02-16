'use strict'

const express = require('express');
const router = express.Router();

const homeCtrl = require('../controllers/home');

router.get('/', (req, res) => {
  res.render('home');
})

router.post('/', (req, res) => {
  homeCtrl.getStock();
  res.render('requestedQuote');
})

module.exports = router;
