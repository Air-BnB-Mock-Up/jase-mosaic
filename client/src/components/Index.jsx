////////////////////////////////////////////
// DEPENDENCIES ////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Modal from 'react-modal';
////////////////////////////////////////////
// HELPER FUNCTIONS ////////////////////////
import {getInfo} from '../httpHandler.js';
import {photos, info} from '../store.js';
import {ModalStyle, ButtonStyle, ButtonHover, ModalHeaderStyle} from '../styles/Modal.js';
////////////////////////////////////////////
// REACT ELEMENTS //////////////////////////
import Info from './info.jsx';
import MainMosaic from './mosaic_main.jsx';
import PhotoFeed from './photo_feed.jsx';
////////////////////////////////////////////
// MAIN PAGE ///////////////////////////////
export class AppPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      info: info,
      isOpen: false,
      button: ButtonStyle
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

  clickHandle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  hoverHandle(bool) {
    var style;
    bool ? style = ButtonHover : style = ButtonStyle
    this.setState({
      button: style
    })
  }

  render() {
    return (
      <div>
        <header>Air BnB</header>
        <Modal onRequestClose={this.clickHandle} isOpen={this.state.isOpen} style={ModalStyle} >
          <header style={ModalHeaderStyle}>
            <button onMouseEnter={() => { this.hoverHandle(true) }} onMouseOver onMouseOut={() => { this.hoverHandle(false)}} onClick={this.clickHandle} style={this.state.button}>{'<'}</button>
          </header>
          <PhotoFeed photos={this.state.photos} />
        </Modal>
        <Info info={this.state.info} />
        <MainMosaic handleClick={this.clickHandle} photos={this.state.photos} />
      </div>
    );
  };
};

ReactDOM.render(<AppPhotos/>, document.getElementById('app'));

