import React, { Component } from 'react';

import HogDetails from './HogDetails'

class HogTile extends Component {

  state = {
    isClicked: false
  }

  imagePath = () => {
    const newName = this.props.hog.name.split(" ").join("_").toLowerCase()
    const slugPath = require(`../hog-imgs/${newName}.jpg`)
    return slugPath
  }

  handleClick = () => {
    this.setState({isClicked: !this.state.isClicked})
  }


  render() {
    const {name, specialty} = this.props.hog
    return (
      <div className="ui four wide column pigTile">
        <img src={this.imagePath()} alt="Hog Pic"/>
        <h1>{name}</h1>
        <h3>specialty: {specialty}</h3>
        <button onClick={this.handleClick} >Show Details</button>
        {this.state.isClicked && < HogDetails hog={this.props.hog} />}
      </div>
    )
  }
}

export default HogTile;
