import React from 'react';
import ReactDOM from 'react-dom';

class AppPhotos extends React.Component {
  constructor(props) {

    this.state = {
      photos = [];
      listing = {};
    }
  }
  componentDidMount() {
    console.log('hello')

  }

  render() {
    return (<div>
        <p>this is where info goes</p>
        <div>this is where photos go</div>
      </div>
    )
  }
}

ReactDOM.render(AppPhotos, document.getElementById('app'))