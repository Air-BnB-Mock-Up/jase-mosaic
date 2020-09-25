
export const info = {}
export var photos = [];

export const gather = (listings) => {
  var listing = listings.data[0];
  info.name = listing.name;
  info.rating = listing.rating;
  info.location = listing.location;
  info.superhost = listing.superhost;
  photos = photos.concat(listing.imageURL)
  console.log(info, photos)
}