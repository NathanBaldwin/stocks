//load express
const express = require('express');
const app = express(); //what is happening here?

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//dif between res.render and res.send?

//if port is not provided, port is 3000
const PORT = process.env.PORT || 3000;
const MONGODB_URL = 'mongodb://localhost:27017/stocks';

//link to routes module:
const routes = require('./routes/');

//configure express to use jade:
app.set('view engine', 'jade');

//middleware:
app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json());

app.use(routes);

//mongoose.connect(MONGODB_URL);

//mongoose.connection.on('open', () => {
  //console.log('MONGO OPEN');
  app.listen(PORT, () => {
    console.log(`Node.js server started. Listening on port ${PORT}`);
  });
//});
