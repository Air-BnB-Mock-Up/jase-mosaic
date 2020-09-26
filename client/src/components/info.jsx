import React from 'react';

const Info = ({ info }) => {
    return (
      <div id="info-bar">
        <span>{info.rating}</span>  <span>{info.superhost}</span>  <span>{info.location}</span>
      </div>
    );
};

export default Info;