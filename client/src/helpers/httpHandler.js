import axios from 'axios';
import { gather } from './store.js'


export const getInfo = (locationID, bringBack) => {
  locationID = window.location.href.split('/').pop() ||
  Math.floor(Math.random() * 100);
  return axios.get(`http://204.236.190.10:3000/mosaic/${locationID}`)
    .then((data) => {
      return gather(data);
    })
    .then((data) => {
      bringBack(data)
    })
    .catch((err) => {
      console.log(err, 'THIS IS ERROR')
    })
}
