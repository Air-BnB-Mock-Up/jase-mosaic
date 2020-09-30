import React from 'react';

import {TopFrameStyle} from '../../styles/Modal.js';

export const TopModal = ({photos}) => {

  const [firstURL, ...otherTwo] = photos;

  return(
    <div>
      <div id={'top-modal-photo-0'}
           className="top-modal-photos hover-box"
           style={ {backgroundImage: `url(${firstURL})`}}
      >
      </div>
      <div id="top-modal-frame" style={TopFrameStyle}>
        {otherTwo.map((url, index) =>
        <div id={`top-modal-photo-${index + 1}`}
            className="top-modal-photos other-two-photos hover-box"
            style={{backgroundImage: `url(${url})`}}
            key={index + 1}
            >
        </div>)}

      </div>

    </div>
  )
}