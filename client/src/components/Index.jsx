import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import getInfo from '../httpHandler.js'

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
        <p>this is where info goes</p>
        <div>this is where photos go</div>
      </div>
    )
  }
}

ReactDOM.render(<AppPhotos/>, document.getElementById('app'));