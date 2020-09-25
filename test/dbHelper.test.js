const mongoose = require('mongoose');
const { insert, getAll } = require('../server/db/dbHelper.js');


beforeAll(async () => {
  await mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true})
})

let seed = {
  name: 'test',
  rating: '',
  location: '',
  superhost: null,
  imageURL: []
}

test('expect insert to be a function that passes in object with schema as single parameter', async () => {
  expect(typeof insert).toBe('function');

  await insert(seed)
    .then((data) => {
       expect(data).toBe('inserted')
    })
})

