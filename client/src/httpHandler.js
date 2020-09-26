import axios from 'axios';
import { gather } from './store.js'


const getInfo = (locationID) => {

  axios.get(`/mosaic/${locationID}`)
    .then((data) => {
      gather(data);
    })
    .catch((err) => {
      console.log(err, 'THIS IS ERROR')
    })

}


export default getInfo;
