import React, { Component } from 'react';

import HogDetails from './HogDetails'

class HogTile extends Component {

  state = {
    details: false
  }

  handleChange = () => {
    this.setState({details: !this.state.details})
  }

  genImageSlug = () => {
    const newName = this.props.hog.name.split(" ").join("_").toLowerCase() + ".jpg"
    const createSlug = require(`../hog-imgs/${newName}`)
    return createSlug
  }

  render() {
    console.log(this.state);
    return (
      <div className="ui four wide column pigTile ">
        <img src={this.genImageSlug()} alt="PigPig"/>
        <h3>{this.props.hog.name}</h3>
        <button onClick={this.handleChange}>{this.state.details ? "Hide Details" : "Show Details"}</button>
        {this.state.details && <HogDetails hog={this.props.hog}/>}
      </div>
    )
  }
}

export default HogTile;
