////////////////////////////////////////
// USE REFERENCE OF APP IN INDEX.JS ////
const express = require('express');
const app = express();
////////////////////////////////////////
// Dependencies ////////////////////////
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
/////////////////////////////////////////
// Initializing /////////////////////////
const db = require('./db/dbIndex.js');
const { insert, getListing } = require('./db/dbHelper.js')
/////////////////////////////////////////

app.use(express.static(path.join(__dirname + '/../client/dist')));
app.use(cors())
/////////////////////////////////////////
// HTTP Handlers ///////////////////////
app.get('/mosaic/:locationID', (req, res) => {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(ip, req.params)
  var id = req.params.locationID
  return getListing(id)
    .then((data) => {
      data = JSON.stringify(data);
      console.log('goodbye')
      res.send(data)
    })
    .catch((err) => {
      res.header(400)
      res.end()
    })
})
/////////////////////////////////////////
module.exports = app;
