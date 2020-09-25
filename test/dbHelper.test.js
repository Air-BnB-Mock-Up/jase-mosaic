////////////////////////////////////////
const mongoose = require('mongoose');
const { insert, getAll } = require('../server/db/dbHelper.js');
const tester = 'servertest'
////////////////////////////////////////
// CONNECT TO NEW DATABASE /////////////
beforeAll(async () => {
  await mongoose.connect(`mongodb://localhost/${tester}`,
  { useNewUrlParser: true, useUnifiedTopology: true})
})
////////////////////////////////////////
// VARIABLES ///////////////////////////
const seed = {
  name: 'test',
  rating: '',
  location: '',
  superhost: null,
  imageURL: []
}
////////////////////////////////////////
// TESTS ///////////////////////////////
describe('Test database helper functions', () => {

  test('expect insert to be a function that passes in object with schema as single parameter', async () => {
    expect(typeof insert).toBe('function');

    await insert(seed)
      .then((data) => {
         expect(data).toBe('inserted')
      })
  })

  test('expect getAll to be a function that will receive all data from same DB that you insert into', async () => {
    expect(typeof getAll).toBe('function');

    await insert(seed)
      .then((data) => {
         expect(data).toBe('inserted');
      })

      await insert(seed)
      .then((data) => {
         expect(data).toBe('inserted');
      })

    await getAll()
      .then((data) => {
        // AFTER RUNNING PREVIOUS AND CURRENT TEST
        expect(data.length).toBe(3);
      });
  })

})

/////////////////////////////////////////////////////////
// MAKES SURE IT DELETES ALL FROM ALL TEST COLLECTIONS //
async function reFreshTest () {
  const collections = Object.keys(mongoose.connection.collections)
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName]
    await collection.deleteMany()
  }
}
// WAITS FOR ALL TESTS TO RUN THEN ERASES
afterAll(async () => {
  await reFreshTest()
})
///////////////////////////////////////////////////////////

