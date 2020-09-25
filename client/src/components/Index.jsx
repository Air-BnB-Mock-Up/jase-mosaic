////////////////////////////////////////
// DEPENDENCIES ////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
////////////////////////////////////////
// HELPER FUNCTIONS ////////////////////
import getInfo from '../httpHandler.js';
////////////////////////////////////////
// REACT ELEMENTS //////////////////////
import Info from './info.jsx';

class AppPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      listing: {}
    }
  }

  componentDidMount() {
    getInfo()
  }

  render() {
    return (
      <div>
        <Info />
        <div>this is where photos go</div>
      </div>
    )
  }
}

ReactDOM.render(<AppPhotos/>, document.getElementById('app'));