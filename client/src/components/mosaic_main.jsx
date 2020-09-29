import React from 'react';

const MainMosaic = ({handleClick, photos}) => {
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
                   className="boxes"
                   onClick={handleClick}
                   key={index}
                  >
              </div>
              )}
        </div>

      </div>

  );
};

export default MainMosaic;