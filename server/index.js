/////////////////////////////////////////
// START SERVER /////////////////////////
const app = require('./httpHandler');
const port = 3000;
  app.listen(port,'0.0.0.0', () => {
    console.log(`Served on localhost:${port}`);
  })


