import React from 'react';

const MosaicSmall = ({photos}) => {
  let large = photos[0];
  let photoFrame = photos.slice(1, 5);
  console.log(photoFrame)
  return (
      <div id="main-frame">
        <div id="feature-photo" className="frames" style={{backgroundImage: `url(${large})`}}>
        </div><div className="frames" id="pic-frame">
          {photoFrame.map((url, index) => <div style={{ backgroundImage: `url(${url})`} } id={ 'ms-' + index } class="boxes" ></div>)}
        </div>

      </div>

  );
};

export default MosaicSmall;