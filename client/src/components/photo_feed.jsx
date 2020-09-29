import React from 'react';

class PhotoFeed extends React.Component {
  constructor(props) {
    super(props);

    this.feed = {
      border: 'thin solid black',
      width: '50%',
      margin: 'auto'
    }

    this.photo = {
      height: '15vh',
    }
  }


  render() {
    return(
      <div id="photo-feed" style={this.feed}>
        {this.props.photos.map((url, index) =>
        <div  style={{ backgroundImage: `url(${url})`,
              backgroundSize: '100% 100%',
              height: '55vh',
              }}
              >yoo</div>)}
      </div>
    )
  }
}

export default PhotoFeed;