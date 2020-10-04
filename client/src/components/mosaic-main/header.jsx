//////////////////////////////////
import React from 'react';
//////////////////////////////////
import {MainStyles} from '../../styles/Mosaic.js';
//////////////////////////////////
const MockHeader = () => (
  <header style={MainStyles.header.style} >
    <img style={MainStyles.header.logo}
         src={MainStyles.header.imgSRC}>
    </img>
    <input style={MainStyles.header.input}
            type={'text'}
            placeholder={'      Start your search'}>
    </input>
    <button style={MainStyles.header.button}>
      <span style={MainStyles.header.magnify}>&#x1F50D;</span>
    </button>
  </header>
);
export default MockHeader;