import React from 'react';
import {MainFrame, Photo, Description, CountOf} from '../../styles/modal.js'

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: this.props.photos,
      index: this.props.indexStart,
    }

  }


  render() {
    const currentPhoto = this.props.photos[this.props.indexStart];
    console.log(`${this.props.indexStart}/${this.props.photos.length}`)
    return (
      <div>
        <button onClick={() => this.props.switchViews('cascade-grid')}>X Close</button>
        <div style={CountOf}>{this.state.index} / {this.state.photos.length}</div>
        <div style={MainFrame}>
          <img style={Photo} src={currentPhoto}></img>
          <span style={Description}>The description of this photo is elegantly descripted</span>
        </div>
      </div>
    );
  };
};

export default Carousel;