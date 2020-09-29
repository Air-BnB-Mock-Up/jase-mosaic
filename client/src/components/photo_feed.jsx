import React from 'react';
import {Feed, TopGridOfModal} from '../styles/Modal.js';

class PhotoFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topGridPhotos: this.props.photos.slice(0, 3),
      restOfPhotos: this.props.photos.slice(3)
    }
  }


  render() {
    return(
      <div id="photo-feed" style={Feed}>
        <div ></div>
        </div>
    );
  }
}

export default PhotoFeed;