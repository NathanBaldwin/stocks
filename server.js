//load express
const express = require('express');
const app = express(); //what is happening here?

//dif between res.render and res.send?

//if port is not provided, port is 3000
const PORT = process.env.PORT || 3000;

//link to routes module:
const routes = require('./routes/')

//configure express to use jade:
app.set('view engine', 'jade');


app.get('/requestQuote', (req, res) => {
  res.render('requestQuote');
})

app.listen(PORT, () => {
    console.log(`Node.js server started. Listening on port ${PORT}`);
  });
