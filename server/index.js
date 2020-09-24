const express = require('express');
const app = express();
const port = 1000;





app.get('/mosaic', (req, res) => {
  res.send('mosaic')
})


app.listen(port, () => {
  console.log(`Served on localhost:${port}`);
})