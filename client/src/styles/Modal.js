import Carousel from '../components/carousel/Carousel.jsx';
////////////////////////////////////////////
// MODAL INITIALIZATION ////////////////////
export const ModalStyle = {
  overlay: {
  },
  content: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    outline: 'none',
  }
};

//////////////////////////////////////////////
// CASCADING GRID STYLING ////////////////////
export const TopFrameStyle = {
  display: 'grid',
  gridTemplateColumns: '100%',
  gridTemplateRows: '50% 50%',
  width: '50%',
  height: '62.7vh'
};

export const FeedStyle = {
  width: '52.5%',
  margin: 'auto'
};

export const ButtonStyle = {
  backgroundColor: '#fff',
  border: 'none',
  borderRadius: '60%',
  transform: 'rotate(270deg)',
  position: 'fixed',
  fontWeight: '100',
  fontSize: '24px',
  padding: '0% 0%',
  outline: 'none'
};

export const ButtonHover = {
  backgroundColor: '#e8e8e8',
  border: 'none',
  borderRadius: '90px',
  transform: 'rotate(270deg)',
  position: 'fixed',
  fontWeight: '100',
  fontSize: '24px',
  padding: '0% 0%',
  outline: 'none'
};

export const ModalHeaderStyle = {
  cascade: {
    backgroundColor: '#fff',
    border: 'none',
    position: 'fixed',
    width: '100%',
    height: '1vh',
    top: '0px',
    zIndex: '100'
  },
  carousel: {
    backgroundColor: '#fff',
    border: 'none',
    width: '100%',
    padding: '.725%',
  }
};

//////////////////////////////////////////////
// CAROUSEL GANG STYLING /////////////////////

export var MainFrame = {
  backgroundColor: '#fff',
  width: '60%',
  height: '80vh',
  margin: 'auto',
  marginTop: '5%',
  padding: '0',

};

export const Exit = {
  backgroundColor: '#e8e8e8',
  border: 'none',
  borderRadius: '8px',
  padding: '.6% 1.1%',
  fontSize: '16px',
  marginLeft: '1.25%'
};

export const Photo = {
  width: '100%',
  height: '70vh',
};

export const Description = {
  display: 'flex',
  justifyContent: 'center',
  fontSize: '18px',
  padding: '1%',
  marginTop: '2%'
};

export const CountOf = {
  display: 'flex',
  justifyContent: 'center',
  fontSize: '18px',
  margin: '0px'
};

export const Direction = {
  Previous: {
    backgroundColor: '#fff',
    padding: '1% 1.5%',
    position: 'absolute',
    top: '50%',
    left: '2%',
    border: 'thin solid #e8e8e8',
    borderRadius: '90%',
    fontSize: '22px'
  },
  Next: {
    backgroundColor: '#fff',
    padding: '1% 1.5%',
    position: 'absolute',
    top: '50%',
    right: '2%',
    border: 'thin solid #e8e8e8',
    borderRadius: '60%',
    fontSize: '22px',
  },
  Hidden: {
    display: 'none'
  }

};
