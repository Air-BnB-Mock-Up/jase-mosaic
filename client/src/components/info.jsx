import React from 'react';

const Info = ({ info }) => {
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