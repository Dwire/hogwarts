import React, { Component } from 'react';

import HogTile from './HogTile'
import HogDetails from './HogDetails'

class HogContainer extends Component {

  createHogTile = () => {
    return  this.props.hogs.map(hog => <HogTile hog={hog} />)
  }

  render() {
    console.log(this.props);
    return (
      <div className= "ui grid container">
        {this.createHogTile()}
      </div>
    )
  }
}

export default HogContainer;
