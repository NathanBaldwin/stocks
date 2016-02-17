'use strict';

const mongoose = require('mongoose');

module.exports.priceQuery = mongoose.model('priceQuerries', 
  mongoose.Schema({}, {strict: false}));


