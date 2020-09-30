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
}

export const FeedStyle = {
  width: '52.5%',
  margin: 'auto'
}

export const ButtonStyle = {
  backgroundColor: '#fff',
  border: 'none',
  borderRadius: '90%',
  position: 'fixed',
  fontWeight: '100',
  fontSize: '30px',
}

export const ButtonHover = {
  backgroundColor: 'lightgray',
  border: 'none',
  borderRadius: '90%',
  position: 'fixed',
  fontWeight: '100',
  fontSize: '30px',
}

export const ModalHeaderStyle = {
  backgroundColor: '#fff',
  border: 'none',
  position: 'fixed',
  width: '100%',
  height: '1vh',
  top: '0px',
  zIndex: '100'
}

//////////////////////////////////////////////
// CAROUSEL GANG STYLING /////////////////////

export const MainFrame = {
  backgroundColor: '#fff',
  width: '60%',
  height: '80vh',
  margin: 'auto',
  marginTop: '5%',
  padding: '0'
}

export const Photo = {
  width: '100%',
  height: '70vh',
}

export const Description = {
  display: 'flex',
  justifyContent: 'center',
  fontSize: '18px',
  padding: '1%',
  marginTop: '2%'
}

export const CountOf = {
  display: 'flex',
  justifyContent: 'center',
  fontSize: '18px',
  margin: '0px'
}

export const Direction = {
  Previous: {
    position: 'absolute',
    top: '50%',
    left: '2%',
    borderRadius: '90%',
    fontSize: '22px'
  },
  Next: {
    position: 'absolute',
    top: '50%',
    right: '2%',
    borderRadius: '90%',
    fontSize: '22px'
  }

}
