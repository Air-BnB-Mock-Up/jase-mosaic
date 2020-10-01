///////////////////////////////////////////////////////////////
import React from 'react';
import {ModalHeaderStyle, MainFrame, Exit, Photo, Description, CountOf, Direction} from '../../styles/modal.js'
///////////////////////////////////////////////////////////////
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: this.props.photos,
      index: this.props.indexStart,
      tranStyle: MainFrame,
    }
  }
  ///////////////////////////////////////////////////////////////
  // ANIMATION ON DIV WHEN LEFT/RIGHT BUTTONS ARE CLICKED ///////
  ///////////////////////////////////////////////////////////////
  switchPhoto(addOrMinusOne) {
    if (this.state.photos[this.state.index + addOrMinusOne]) {
      var nextIndex = addOrMinusOne + this.state.index;
      this.setState({
        index: nextIndex
      });
      var container = document.getElementById('photo-container');
      var level = 0;
      container.style.opacity = `${level}`;
      var raiseOpacity = () => {
        if (level >= 1) {
          return;
        };
        level += .05;
        container.style.opacity = `${level}`;
        window.requestAnimationFrame(raiseOpacity);
      };
      return raiseOpacity();
    };
  };
  ///////////////////////////////////////////////////////////////
  render() {
    const currentPhoto = this.state.photos[this.state.index];
    return (
      <div>
        <header style={ModalHeaderStyle.carousel}>
        </header>
        <button className="button-hover"
                style={Exit}
                onClick={() => this.props.switchViews('cascade-grid')}>
        X  Close
        </button>
        <div style={CountOf}>{this.state.index + 1} / {this.state.photos.length}</div>
        <button id="left-button"
                className="button-hover"
                onClick={() => {this.switchPhoto(-1)}}
                style={this.state.index !== 0 ? Direction.Previous : Direction.Hidden}
                >{'<'}
        </button>
        <div id="photo-container" style={this.state.tranStyle}>
          <img id="main-photo" style={Photo} src={currentPhoto}></img>
          <span style={Description}>The description of this photo is elegantly descripted</span>
        </div>
        <button id="right-button"
                className="button-hover"
                onClick={() => this.switchPhoto(1)}
                style={this.state.index !== this.state.photos.length - 1 ? Direction.Next : Direction.Hidden}
                >{'>'}
        </button>
      </div>
    );
  };
};
export default Carousel;