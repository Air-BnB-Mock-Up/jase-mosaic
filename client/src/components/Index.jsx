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
import {ModalStyle} from '../styles/Modal.js';
////////////////////////////////////////////
// REACT ELEMENTS //////////////////////////
import Info from './info.jsx';
import MainMosaic from './mosaic_main.jsx';
import PhotoFeed from './modal/photo_feed.jsx';
import Carousel from './carousel/Carousel.jsx';
////////////////////////////////////////////
// MAIN PAGE ///////////////////////////////
export class AppPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      info: info,
      isOpen: false,
      view: 'cascade-grid',
      index: 0
    }
    Modal.setAppElement(document.getElementById('app'));
    this.clickHandle = this.clickHandle.bind(this);
    this.switchViews = this.switchViews.bind(this);
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

  switchViews(view, index) {
    this.setState({
      view: view,
      index: index
    });
  }
  renderViews(view) {
    if (view === 'carousel') {
      return <Carousel switchViews={this.switchViews} photos={this.state.photos} indexStart={this.state.index} />;
    } else if (view === 'cascade-grid') {
      return <PhotoFeed handleClick={this.clickHandle} switchViews={this.switchViews} photos={this.state.photos} />;
    }
  }

  render() {
    return (
      <div>
        <header>Air BnB</header>
        <Modal onRequestClose={this.clickHandle} isOpen={this.state.isOpen} style={ModalStyle} >
          {this.renderViews(this.state.view)}
        </Modal>
        <Info info={this.state.info} />
        <MainMosaic handleClick={this.clickHandle} photos={this.state.photos} />
      </div>
    );
  };
};

ReactDOM.render(<AppPhotos/>, document.getElementById('app'));

