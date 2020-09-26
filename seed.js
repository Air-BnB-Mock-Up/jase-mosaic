const app = require('./server/httpHandler.js')
const faker = require('faker');
const {Photos, insert} = require('./server/db/dbHelper.js');


var count = -1;
class Seed {
  constructor() {
    this.name = `${faker.random.catch_phrase_adjective()} ${faker.random.catch_phrase_descriptor()} home with ${faker.random.bs_buzz()} ${faker.random.bs_noun()}`;
    this.rating = `${faker.random.number({min: 1, max: 10})}/10`
    this.location = `${faker.Address.city()}, ${faker.random.us_state_abbr()}`
    this.superhost = count % 2 === 0 ? true : false;
    this.imageURL = this.randomImages();
    this.locationID = this.counter()
  }

  counter () {
    count++;
    return count;
  }
  randomImages() {
    let buildingOrHouse = ['b', 'h'];
    let index = faker.random.number(1);

    let outsideViews = [];
    let insideViews = [];

    for (let x = 0; x < 12; x++) {
      let randomNumber = faker.random.number(20);
      let outURL = `https://jaseairbnbmock.s3-us-west-1.amazonaws.com/FEC/${buildingOrHouse[index]}${randomNumber}.jpeg`;
      let inURL = `https://jaseairbnbmock.s3-us-west-1.amazonaws.com/FEC/r${randomNumber}.jpeg`;
      outsideViews.push(outURL);
      insideViews.push(inURL);
    }

    let randomImagesArray = outsideViews.concat(insideViews);
    return randomImagesArray;
  }


}
const seeder = () => {
  for (let x = 0; x < 100; x++) {
    let seed = new Seed();
    insert(seed)
  }
}
seeder()

// let seed = new Seed();












