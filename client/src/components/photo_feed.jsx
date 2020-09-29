import React from 'react';
import {FeedStyle} from '../styles/Modal.js';
import {TopModal} from './modal/mosaic_top_modal.jsx';
import {ModalListItem} from './modal/mosaic_dynamic.jsx';

class PhotoFeed extends React.Component {
  constructor(props) {
    super(props);
    this.splitThree = this.threeSplitter.bind(this);

    this.state = {
      topGridPhotos: this.props.photos.slice(0, 3),
      restOfPhotos: this.props.photos.slice(3),
    };
  }

  threeSplitter(photos) {
    let newFormat = [];
    for (let x = 0; x < photos.length; x += 3) {
      let block = [];
      block.push(photos[x]);
      if (photos[x + 1] !== undefined && photos[x + 2] !== undefined) {
        block = block.concat([photos[x + 1], photos[x + 2]]);
      };
      newFormat.push(block);
    };
    return newFormat
  }



  render() {
    return(
      <div id="photo-feed" style={FeedStyle}>
        <TopModal photos={this.state.topGridPhotos} />
        <div>
        {this.splitThree(this.state.restOfPhotos).map((threePhotos) => <ModalListItem photos={threePhotos} />)}
        </div>
        </div>
    );
  }
}

export default PhotoFeed;