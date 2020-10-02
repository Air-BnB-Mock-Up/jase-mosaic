/////////////////////////////////////////////
import React from 'react';
/////////////////////////////////////////////
import {FeedStyle, ModalHeaderStyle, ButtonStyle, ButtonHover} from '../../styles/Modal.js';
/////////////////////////////////////////////
import {TopModal} from './mosaic_top_modal.jsx';
import {ModalListItem} from './mosaic_dynamic.jsx';
/////////////////////////////////////////////
// FIRST VIEW OF MODAL CASCADING GRIDS //////
class PhotoFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topGridPhotos: this.props.photos.slice(0, 3),
      restOfPhotos: this.props.photos.slice(3),
      button: ButtonStyle
    };
    this.splitThree = this.threeSplitter.bind(this);
  };
  /////////////////////////////////////////////
  // SHAPES ARRAY OF URL TO CONFORM W/ GRIDS //
  threeSplitter(photos) {
    let newFormat = [];
    for (let x = 0; x < photos.length; x += 3) {
      let block = [];
      block.push(photos[x]);
      // IF EITHER ONE IS UNDEFINED DON'T INCLUDE THE LAST TWO
      if (photos[x + 1] !== undefined && photos[x + 2] !== undefined) {
        block = block.concat([photos[x + 1], photos[x + 2]]);
      };
      newFormat.push(block);
    };
    return newFormat
  };
  /////////////////////////////////////////////
  // SWITCH BETWEEN BUTTON STYLES IF HOVERED //
  hoverHandle(bool) {
    var style;
    bool ? style = ButtonHover : style = ButtonStyle
    this.setState({
      button: style
    });
  };
  /////////////////////////////////////////////
  // TOP GRID IS STATIC / ALL OTHERS DYNAMIC //
  // KEEP TRACK OF INDEX FROM SPLIT ARRAY /////
  render() {
    return(
      <div>
        <header style={ModalHeaderStyle.cascade}>
            <button onMouseEnter={() => { this.hoverHandle(true) }} onMouseOver onMouseOut={() => { this.hoverHandle(false)}} onClick={this.props.handleClick} style={this.state.button}>&#8963;</button>
        </header>
        <div id="photo-feed" style={FeedStyle}>
          <TopModal handleClick={this.props.switchViews} photos={this.state.topGridPhotos} indexStart={0}/>
          <div>
          {this.splitThree(this.state.restOfPhotos).map((threePhotos, index) => <ModalListItem handleClick={this.props.switchViews} photos={threePhotos} indexStart={index + 1} />)}
          </div>
         </div>
      </div>
    );
  }
}

export default PhotoFeed;