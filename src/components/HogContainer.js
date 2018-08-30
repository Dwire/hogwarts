import React, { Component } from 'react';
import HogTile from './HogTile'

// import hogs from '../porkers_data';

class HogContainer extends Component {

  createPigTiles = () => {
    return this.props.sortByString.map(hog => {
      return <HogTile hog={hog}/>
    })
  }
  render() {
    return (
      <div className="ui grid container">
        {this.createPigTiles()}
      </div>
    )
  }
}

export default HogContainer;
