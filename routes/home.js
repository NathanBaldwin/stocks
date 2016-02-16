'use strict'

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
})

router.post('/', (req, res) => {
  res.render('requestedQuote');
})

module.exports = router;
