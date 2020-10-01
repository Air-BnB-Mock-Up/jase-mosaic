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
    };
    ////////////////////////////////////////////
    // BINDING FUNCTIONS AND MODAL /////////////
    Modal.setAppElement(document.getElementById('app'));
    this.clickHandle = this.clickHandle.bind(this);
    this.switchViews = this.switchViews.bind(this);
  };
  ////////////////////////////////////////////
  // GATHER DATA FROM DATABASE FOR LISTING ///
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
  ////////////////////////////////////////////
  // OPENS AND CLOSES MODAL //////////////////
  clickHandle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  ////////////////////////////////////////////
  // SWITCHES BETWEEN CASCADE/CAROUSEL VIEWS /
  switchViews(view, index) {
    this.setState({
      view: view,
      index: index
    });
  };
  renderViews(view) {
    if (view === 'carousel') {
      return <Carousel switchViews={this.switchViews} photos={this.state.photos} indexStart={this.state.index} />
    } else if (view === 'cascade-grid') {
      return <PhotoFeed handleClick={this.clickHandle} switchViews={this.switchViews} photos={this.state.photos} />
    };
  };
  ////////////////////////////////////////////
  // MAIN RENDER MODAL IS DOWN ///////////////
  render() {
    return (
      <div>
        <header id="main-header" >
         <img style={{margin: '0 12.2%', padding: '0', height: '8.5vh', width: '8%', marginTop: '.5%'}} src={'https://jaseairbnbmock.s3-us-west-1.amazonaws.com/FEC/Airbnb_Logo.png'}></img>

            <input style={{position: 'fixed', top: '2.5%', border: 'thin solid #e8e8e8', borderRadius: '90px', margin: 'auto 8%', height: '5vh', width: '18%'}} type={'text'} placeHolder={'      Start your search'}></input>
            <button style={{position: 'fixed', top: '3.7%', right: '42.5%', height: '3vh', width: '1.7%', backgroundColor: 'red', border: 'none', borderRadius: '90px'}}>&#128269;</button>
        </header>
        <Modal onRequestClose={this.clickHandle} isOpen={this.state.isOpen} style={ModalStyle}>
          {this.renderViews(this.state.view)}
        </Modal>
        <div id="main_page_body">
          <Info info={this.state.info} />
          <MainMosaic handleClick={this.clickHandle} photos={this.state.photos} />
        </div>
      </div>
    );
  };
};
ReactDOM.render(<AppPhotos/>, document.getElementById('app'));

