const faker = require('faker');

class Seed {
  constructor() {
    this.name = faker.fake(`{{hacker.adjective}} {{hacker.ingverb}} home with a {{hacker.noun}}`)
    this.rating = faker.random.number(10)
    this.location = faker.fake(`{{address.city}}, {{address.state}}`)
    this.superhost = faker.random.boolean();
    this.imageURL = this.randomImages();
  }

  randomImages() {
    let styles = ['r', 'b', 'h'];
    let buildingOrHouse = faker.random.number({min: 2, max: 3})

    let outsideViews = [];
    let insideViews = [];

    for (let x = 0; x < 12; x++) {
      let randomNumber = faker.random.number(20);
      let outURL = `https://jaseairbnbmock.s3-us-west-1.amazonaws.com/FEC/${buildingOrHouse}${randomNumber}.jpeg`;
      let inURL = `https://jaseairbnbmock.s3-us-west-1.amazonaws.com/FEC/r${randomNumber}.jpeg`;
      outsideViews.push(outURL);
      insideViews.push(inURL);
    }

    let randomImagesArray = outsideViews.concat(insideViews);
    return randomImagesArray;
  }

}


let seed = new Seed();
console.log(seed)











