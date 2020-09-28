////////////////////////////////////////////
// DEPENDENCIES ////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Modal from 'react-modal';
////////////////////////////////////////////
// HELPER FUNCTIONS ////////////////////////
import getInfo from '../httpHandler.js';
import {photos, info} from '../store.js';
////////////////////////////////////////////
// REACT ELEMENTS //////////////////////////
import Info from './info.jsx';
import MosaicSmall from './mosaic_small.jsx';
import PhotoFeed from './photo_feed.jsx';
////////////////////////////////////////////
// MAIN PAGE ///////////////////////////////
export class AppPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      info: info,
      width: {width: '100%'}
    }
    Modal.setAppElement(document.getElementById('app'));

    this.clickHandle = this.clickHandle.bind(this);
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

  clickHandle(isOpen) {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };


  render() {
    return (
      <div>
        <header>Air BnB</header>
        <Modal onRequestClose={this.clickHandle} isOpen={this.state.isOpen} style={{margin: '0', width: '100%'}}>
          <button onClick={this.clickHandle}>click me</button>
          <PhotoFeed photos={this.state.photos} />
        </Modal>

        <Info info={this.state.info} />
        <MosaicSmall handleClick={this.clickHandle} photos={this.state.photos} />
      </div>
    );
  };
};

ReactDOM.render(<AppPhotos/>, document.getElementById('app'));

