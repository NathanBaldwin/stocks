'use strict'

const express = require('express');
const router = express.Router();

const home = require('./home');
const requestedQuote = require('./requestedQuote');

router.use(home);
router.use(requestedQuote);

module.exports = router;
