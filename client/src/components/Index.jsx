////////////////////////////////////////////
// DEPENDENCIES ////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
////////////////////////////////////////////
// HELPER FUNCTIONS ////////////////////////
import getInfo from '../httpHandler.js';
import {photos, info} from '../store.js';
////////////////////////////////////////////
// REACT ELEMENTS //////////////////////////
import Info from './info.jsx';
import MosaicSmall from './mosaic_small.jsx'
////////////////////////////////////////////
// MAIN PAGE ///////////////////////////////
export class AppPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      info: info
    }
  }

  componentDidMount() {
    let randomListing =
    Math.floor(Math.random() * 100);
    return getInfo(randomListing, (data) => {
      this.setState({
        photos: data[1],
        info: data[0]
      });
    });
  };

  render() {
    return (
      <div>
        <header>Air BnB</header>
        <Info info={this.state.info} />
        <MosaicSmall photos={this.state.photos} />
      </div>
    );
  };
};

ReactDOM.render(<AppPhotos/>, document.getElementById('app'));

