import React from 'react';
import ReactDOM from 'react-dom';

class AppPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      listing: {}
    }
  }
  componentDidMount() {

  }

  render() {
    return (
      <div>
        {console.log('hello')}
        <p>this is where info goes</p>
        <div>this is where photos go</div>
      </div>
    )
  }
}

ReactDOM.render(<AppPhotos/>, document.getElementById('app'));