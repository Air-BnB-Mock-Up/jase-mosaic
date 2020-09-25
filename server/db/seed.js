const faker = require('faker');
const {db, insert} = require('./dbHelper.js');

class Seed {
  constructor() {
    this.name = faker.fake(`{{hacker.adjective}} {{hacker.ingverb}} home with a {{hacker.noun}}`)
    this.rating = `${faker.random.number({min: 1, max: 10})}/10`
    this.location = faker.fake(`{{address.city}}, {{address.state}}`)
    this.superhost = faker.random.boolean();
    this.imageURL = this.randomImages();
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


for (let x = 0; x < 100; x++) {
  let seed = new Seed();
  insert(seed)
}
let seed = new Seed();
console.log(seed)











