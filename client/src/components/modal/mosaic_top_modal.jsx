import React from 'react';

import {TopFrameStyle} from '../../styles/Modal.js';

export const TopModal = ({photos, handleClick}) => {

  const [firstURL, ...otherTwo] = photos;

  return(
    <div>
      <div id={'top-modal-photo-0'}
           className="top-modal-photos hover-box"
           style={ {backgroundImage: `url(${firstURL})`}}
           onClick={(e) => handleClick('carousel', 0)}
      >
      </div>
      <div id="top-modal-frame" style={TopFrameStyle}>
        {otherTwo.map((url, index) =>
        <div id={`top-modal-photo-${index + 1}`}
            className="top-modal-photos other-two-photos hover-box"
            style={{backgroundImage: `url(${url})`}}
            onClick={() => handleClick('carousel', index + 1)}
            key={index + 1}
            >
        </div>)}

      </div>

    </div>
  )
}