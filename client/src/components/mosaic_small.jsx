import React from 'react';

const MosaicSmall = ({handleClick, photos}) => {
  let large = photos[0];
  let photoFrame = photos.slice(1, 5);


  return (
      <div id="main-frame">
        <div  id="feature-photo"
              className="frames"
              style={{backgroundImage: `url(${large})`}}
              onClick={handleClick}
              >
        </div>
        <div  className="frames"
              id="pic-frame">

              {photoFrame.map((url, index) =>
              <div style={{ backgroundImage: `url(${url})`} }
                                                   id={ 'ms-' + index }
                                                   class="boxes"
                                                   onClick={handleClick}
                                                   >
              </div>
              )}
        </div>

      </div>

  );
};

export default MosaicSmall;