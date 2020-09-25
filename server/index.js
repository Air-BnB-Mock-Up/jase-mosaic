/////////////////////////////////////////
// Server set up
const express = require('express');
const app = express();
const port = 1000;
/////////////////////////////////////////
// Dependencies
const bodyParser = require('body-parser');
const path = require('path');
/////////////////////////////////////////
// Initializing
const db = require('./db/dbIndex.js');
/////////////////////////////////////////

app.use(express.static('LOCATION GOES HERE'));





app.get('/mosaic', (req, res) => {
  return getAll()
    .then((data) => {
      data = JSON.stringify(data);
      res.send(data)
    })
    .catch((err) => {
      res.header(400)
      res.end()
    })
})


app.listen(port, () => {
  console.log(`Served on localhost:${port}`);
})