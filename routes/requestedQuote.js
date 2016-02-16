'use strict'

const express = require('express');
const router = express.Router();

router.get('/requestedQuote', (req, res) => {
  res.render('requestedQuote');
})

module.exports = router;
