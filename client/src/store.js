
export const info = {
  name: '',
  rating: '',
  location: '',
  superhost: null,
}
export var photos = [];

export const gather = (listing) => {
  listing = listing.data[0];
  info.name = listing.name;
  info.rating = listing.rating;
  info.location = listing.location;
  info.superhost = listing.superhost;
  photos = photos.concat(listing.imageURL)
  return ([info, photos])
}