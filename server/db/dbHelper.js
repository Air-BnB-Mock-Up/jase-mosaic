//////////////////////////////////////////////////////////
const mongoose = require('mongoose');
//////////////////////////////////////////////////////////

const schema = new mongoose.Schema({
  name: String,
  rating: String,
  location: String,
  superhost: String,
  imageURL: Array,
});

//////////////////////////////////////////////////
const Photos = mongoose.model('Photos', schema);

module.exports.Photos = Photos;
///FUNCTIONS TO INTERACT WITH DB//////////////////
const insert = (seed) => {
  return Photos.create(seed)
    .then((data) => {
      console.log('GO CHECK THAT DB')
      return 'inserted'
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