import React from 'react';
import {FeedStyle} from '../styles/Modal.js';
import {TopModal} from './mosaic_top_modal.jsx';

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
      <div id="photo-feed" style={FeedStyle}>
        <TopModal photos={this.state.topGridPhotos} />
        </div>
    );
  }
}

export default PhotoFeed;