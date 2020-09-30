import React from 'react';
import {MainFrame, Photo, Description, CountOf, Direction} from '../../styles/modal.js'

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: this.props.photos,
      index: this.props.indexStart,
    }

  }

  switchPhoto(index) {
    if (this.state.photos[this.state.index + index]) {
      index = index + this.state.index
      this.setState({
        index: index
      })
    }
  }


  render() {
    const currentPhoto = this.state.photos[this.state.index];

    return (
      <div>
        <button onClick={() => this.props.switchViews('cascade-grid')}>X Close</button>
        <div style={CountOf}>{this.state.index + 1} / {this.state.photos.length}</div>
        <button onClick={() => this.switchPhoto(-1)} style={Direction.Previous}>{'<'}</button>
        <div style={MainFrame}>
          <img style={Photo} src={currentPhoto}></img>
          <span style={Description}>The description of this photo is elegantly descripted</span>
        </div>
        <button onClick={() => this.switchPhoto(1)} style={Direction.Next}>{'>'}</button>
      </div>
    );
  };
};

export default Carousel;