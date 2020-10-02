export const MainStyles = {
  /////////////////////////
  // MAIN HEADER STYLING //
  /////////////////////////
  header: {
    style: {
      padding: '0%',
      height: '10vh',
      boxSizing: 'content-box',
      backgroundColor: '#fff',
      boxShadow: '1px 1px 7px 3px rgb(233 233 233 / 48%)'
    },
    logo: {
      margin: '0 13.2% 0 10.5%',
      padding: '0',
      height: '8.5vh',
      width: '8%',
      marginTop: '.5%'
    },
    imgSRC: 'https://jaseairbnbmock.s3-us-west-1.amazonaws.com/FEC/Airbnb_Logo.png',
    input: {
      position: 'fixed',
      top: '2.5%',
      border: 'thin solid #e8e8e8',
      borderRadius: '90px',
      margin: 'auto 8%',
      height: '5vh',
      width: '18%'
    },
    button: {
      boxSizing: 'border-box',
      position: 'fixed',
      top: '3.7%',
      right: '42.5%',
      height: '3vh',
      width: '1.7%',
      backgroundColor: '#ff385c',
      border: 'none',
      borderRadius: '90px'
    },
    magnify: {
      fontSize: '80%'
    }
  },
  /////////////////////////
  // INFO BAR STYLING /////
  /////////////////////////
  info: {
    bar: {
      width: '80%',
      margin: '1.5% 11%',
      marginTop: '1.6%'
    },
    name: {
      fontSize: '27px'
    },
    icons: {
      marginTop: '1%'
    },
    rating: {
      marginLeft: '.1%',
      margin: '0% .8%',
      fontSize: '14px',
    },
    starColor: {
      color: '#ff385c'
    },
    totalRatings: {
      color: 'grey'
    },
    superHost: {
      margin: '0% .8%',
      fontSize: '14px',
    },
    medal: {
      color: 'transparent',
      textShadow: '0 0 0 #ff385c'
    },
    super: {
      color: 'grey'
    },
    location: {
      color: 'grey',
      textDecorationLine: 'underline',
      margin: '0% .8%',
      fontSize: '14px'
    }
  },
  /////////////////////////
  // MAIN MOSAIC STYLING //
  /////////////////////////
  photos: {
    container: {
      backgroundColor: '#f3f3f300'
    },
    large: {
      borderTopLeftRadius: '3%',
      borderBottomLeftRadius: '3%',
      width: '39%',
      height: '51.8vh',
      margin: '.2% .28% 0% 11.1%',
      backgroundSize: '100% 100%',
      float: 'left'
    },
    fourFrames: {
      display: 'grid',
      gridTemplateColumns: '50% 50%',
      gridTemplateRows: '50%',
      maxWidth: '38.9%'
    },
    frame: {
      margin: '1%',
      justifyContent: 'space-between',
      width: '97.3%',
      height: '25.5vh',
      backgroundSize: '100% 100%'
    }

  }
}