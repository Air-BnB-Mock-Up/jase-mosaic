/////////////////////////////////////////////
import React from 'react';
/////////////////////////////////////////////
// LAYS OUT FIRST 5 PHOTOS IN DYNAMIC GRID //
const MainMosaic = ({handleClick, photos}) => {
  let large = photos[0];
  let photoFrame = photos.slice(1, 5);
  return (
      <div id="main-frame" style={{backgroundColor: '#f3f3f3'}}>
        <div id="feature-photo"
             className="frames hover-box"
             style={{backgroundImage: `url(${large})`}}
             onClick={handleClick}>
        </div>
        <div className="frames"
             id="pic-frame">
          {photoFrame.map((url, index) =>
          <div style={{ backgroundImage: `url(${url})`} }
                id={ 'ms-' + index }
                className="boxes hover-box"
                onClick={handleClick}
                key={index}>
          </div>)}
        </div>
      </div>
  );
};
export default MainMosaic;