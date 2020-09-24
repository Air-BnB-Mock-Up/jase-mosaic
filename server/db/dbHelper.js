//////////////////////////////////////////////////////////
const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/mosaic',
{ useNewUrlParser: true, useUnifiedTopology: true });
//////////////////////////////////////////////////////////

const schema = new mongoose.Schema({
  name: String,
  rating: String,
  city: String,
  state: String,
  superhost: String,
  imageURL: String,
  locationID: Number
});

//////////////////////////////////////////////////
const Photos = mongoose.model('Photos', schema);
const seed = require('./seed.js');
///FUNCTIONS TO INTERACT WITH DB//////////////////
const insert = () => {
  Photos.create(seed)
    .then((data) => {
      console.log('GO CHECK THAT DB')
    })
    .catch((err) => {
      console.log(err, 'ERROR INSERTING')
    })
}
/////////////////////////////////////////////////////
const getAll = () => {
  return Photos.find()
    .then((photos) => {
      console.log(photos);
      return photos;
    })
    .catch((err) => {
      console.log(err);
    })
}
///////////////////////////////////
module.exports.getAll = getAll;
module.exports.insert = insert;
///////////////////////////////////