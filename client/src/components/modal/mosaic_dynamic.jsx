import React from 'react';

export const ModalListItem = ({photos}) => {
  const [firstURL, ...otherTwo] = photos;
  return (
    <div style={{width: '100%', height: '85vh', margin: '1.1% 0'}}>
      <div className="photo-large hover-box" style={{backgroundImage: `url(${firstURL})`, width: '100%', height: '62vh', marginBottom: '1%'}}></div>
      <div>
        {otherTwo.map((url, index) => <div id={`two-horizontal-${index}`} className="hover-box" style={{backgroundImage: `url(${url})`, width: '49.5%', height: '22vh', float: 'left', marginBottom: '1%'}} ></div> )}
      </div>
    </div>
  );
};