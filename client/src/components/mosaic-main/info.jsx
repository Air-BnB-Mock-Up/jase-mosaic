///////////////////////////////////////////////////
import React from 'react';
///////////////////////////////////////////////////
import {MainStyles} from '../../styles/Mosaic.js';
// INFO BAR WITH RANDOMIZED DATA //////////////////
const Info = ({ info }) => {
    return (
      <div key={-1} style={MainStyles.info.bar}>
        <span key={-2} style={MainStyles.info.name} >{info.name}</span><br></br>
        <div key={2} style={MainStyles.info.icons}>{[
          <span key={3} style={MainStyles.info.rating}>
            <span key={4} style={MainStyles.info.starColor}>&#9733;</span>
            {info.rating[0]}
            <span key={5} style={MainStyles.info.totalRatings}> ({info.rating[1]})</span>
          </span>,
          '\u00b7',
          <span key={6} style={MainStyles.info.superhost}>
          {[<span key={7} style={MainStyles.info.medal}>&#127941;</span>,
            <span key={8} style={MainStyles.info.super}>Superhost</span>]}
          </span>,
          '\u00b7',
          <a key={9} style={MainStyles.info.location}>
            {info.location}, United States
          </a>
      ]}</div>
      </div>
    );
};
export default Info;