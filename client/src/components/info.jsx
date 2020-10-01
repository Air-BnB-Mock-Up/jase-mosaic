import React from 'react';

const Info = ({ info }) => {
      if (info.name) {
        let listingName = info.name;
        listingName = listingName.split('');
        listingName[0] = listingName[0].toUpperCase();
        info.name = listingName.join('')
      }
      console.log(info.name)
    return (
      <div id="info-bar">

        <span id="info-name" style={{}}>{info.name}</span><br></br>

        <span className="info"
              id="info-rating">{info.rating}</span>
        <span className="info"
              id="info-superhost">{info.superhost}</span>
        <span className="info"
              id="info-location">{info.location}</span>

      </div>
    );
};

export default Info;