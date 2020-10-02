import React from 'react';

const Info = ({ info }) => {
      // if (info.name) {
      //   let listingName = info.name;
      //   listingName = listingName.split('');
      //   listingName[0] = listingName[0].toUpperCase();
      //   info.name = listingName.join('')
      // }
      // info.rating = (info.rating / 10).toFixed(1)
    return (

      <div id="info-bar">

        <span id="info-name" style={{}}>{info.name}</span><br></br>
      <div>{[
        <span className="info"
              id="info-rating"> <span style={{color: '#ff385c'}}>&#9733;</span> {info.rating[0]} <span style={{color: 'grey'}}>({info.rating[1]})</span></span>, '\u00b7',
        <span className="info"
              id="info-superhost">{[<span style={{color: 'transparent',
                textShadow: '0 0 0 #ff385c'}}>&#127941;</span>, <span style={{color: 'grey'}}>Superhost</span>]}</span>, '\u00b7',
        <span className="info"
              id="info-location"
              style={{color: 'grey', textDecoration: 'underline'}}>{info.location}, United States</span>
        ]}</div>


      </div>
    );
};

export default Info;