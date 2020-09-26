import React from 'react';

const MosaicSmall = (props) => {
  let firstPhotos = props.photos.slice(0, 5);
  console.log(firstPhotos)
  return (
    <div id="mosaic-small">
      {firstPhotos.map((url) => <img src={url}></img>)}
    </div>
  );
};

export default MosaicSmall;