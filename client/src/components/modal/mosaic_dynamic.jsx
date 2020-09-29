import React from 'react';

export const ModalListItem = ({photos}) => {
  const [firstURL, ...otherTwo] = photos;
  return (
    <div style={{border: 'thin solid black', width: '100%', height: '85vh', margin: '0'}}>
      <div className="photo-large hover-box" style={{backgroundImage: `url(${firstURL})`, width: '100%', height: '62.7vh'}}></div>
      <div>
        {otherTwo.map((url) => <div className="hover-box" style={{backgroundImage: `url(${url})`, width: '50%', height: '22vh', float: 'left'}} ></div> )}
      </div>
    </div>
  );
};