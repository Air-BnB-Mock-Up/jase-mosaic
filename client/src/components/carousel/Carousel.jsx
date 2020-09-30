import React from 'react';
import {MainFrame, Photo, Description, CountOf, Direction} from '../../styles/modal.js'

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: this.props.photos,
      index: this.props.indexStart,
      tranStyle: MainFrame,
    }

  }
  switchPhoto(index) {
    if (this.state.photos[this.state.index + index]) {
      index = index + this.state.index
      this.setState({
        index: index
      })

      var container = document.getElementById('photo-container');
      container.style.opacity = '0'
      var level = 0
      var raiseOpacity = () => {
        if (level >= 1) {
          return
        } else {
          console.log('up')
          level += .05;
          container.style.opacity = `${level}`
        }
        setInterval(raiseOpacity, 50);
      }
      return raiseOpacity()
    }
  }
  render() {
    console.log(this.state.tranStyle)
    const currentPhoto = this.state.photos[this.state.index];
    return (
      <div>
        <button onClick={() => this.props.switchViews('cascade-grid')}>X Close</button>
        <div style={CountOf}>{this.state.index + 1} / {this.state.photos.length}</div>
        <button onClick={() => this.switchPhoto(-1)} style={Direction.Previous}>{'<'}</button>
        <div id="photo-container" style={this.state.tranStyle}>
          <img id="main-photo" style={Photo} src={currentPhoto}></img>
          <span style={Description}>The description of this photo is elegantly descripted</span>
        </div>
        <button onClick={() => this.switchPhoto(1)} style={Direction.Next}>{'>'}</button>
      </div>
    );
  };
};
export default Carousel;