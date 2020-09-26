import axios from 'axios';
import { gather } from './store.js'


const getInfo = (locationID, bringBack) => {
  return axios.get(`/mosaic/${locationID}`)
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


export default getInfo;
