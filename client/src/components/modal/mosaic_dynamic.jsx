/////////////////////////////////////////////
import React from 'react';
/////////////////////////////////////////////
// CASCADING GRID REPEATED FOR ALL PHOTOS ///
// KEEP TRACK OF THE INDEX COUNT ////////////
// ONCLICK SWITCHES VIEW AT CURRENT PHOTO ///
/////////////////////////////////////////////
export const ModalListItem = ({photos, indexStart, handleClick}) => {
  const [firstURL, ...otherTwo] = photos;
  indexStart = indexStart * 3;
  return (
    <div style={{width: '100%', height: '85vh', margin: '1.1% 0'}}>
      <div onClick={() => handleClick('carousel', indexStart)}
           className="photo-large hover-box"
           style={{backgroundImage: `url(${firstURL})`,
                   width: '100%',
                   height: '62vh',
                   marginBottom: '1%'}}>
      </div>
      <div>
        {otherTwo.map((url, index) =>
        <div onClick={() => handleClick('carousel', (indexStart + index + 1))}
             id={`two-horizontal-${index}`}
             className="hover-box"
             style={{backgroundImage: `url(${url})`,
                     width: '49.5%',
                     height: '22vh',
                     float: 'left',
                     marginBottom: '1%'}}>
        </div>
        )}
      </div>
    </div>
  );
};