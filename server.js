//load express

const express = require('express');
const app = express(); //what is happening here?

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Node.js server started. Listening on port ${PORT}`);
  });
