const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/mosaic');


const schema = new mongoose.Schema({
  name: String,
  rating: String,
  city: String,
  state: String,
  superhost: String,
  imageURL: String,
  locationID: Number
});


const Photos = mongoose.model('Photos', schema);

const insert = () => {

  let test = {
    name: 'Luxury High Rise',
    rating: '7/10',
    city: 'Las Vegas',
    state: 'Nevada',
    superhost: 'No',
    imageURL: 'fakeimageurl.com',
    locationID: 20
  }

  Photos.create(test)
    .then((data) => {
      console.log('GO CHECK THAT DB')
    })
    .catch((err) => {
      console.log(err, 'ERROR INSERTING')
    })
}

// insert();