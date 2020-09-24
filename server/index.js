/////////////////////////////////////////
const express = require('express');
const app = express();
const port = 1000;
/////////////////////////////////////////
const bodyParser = require('body-parser');
const path = require('path');
/////////////////////////////////////////
const { db, getAll, insert } = require('./db/dbHelper.js');


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