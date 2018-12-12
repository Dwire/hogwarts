import React, { Component } from 'react'
import hogs from '../porkers_data';

import HogTile from './HogTile'
import HogForm from './HogForm'

class HogContainer extends Component {

  state = {
    greased: false,
    filterTerm: 'all'
  }

  handleFilter = (e) => {
    const term = e.target.value
    this.setState({
      filterTerm: term
    })
  }

  handleGreased = (e) => {
    this.setState({
      greased: !this.state.greased
    })
  }

  // filterGreased = () => {
  //   hogs.filter()
  // }

  renderHogTiles = () => {
    return hogs.map(hog => {
      return <HogTile hog={hog}/>
    })
  }


  render() {
    console.log(this.state);
    return(
      <div>
        <HogForm handleFilter={this.handleFilter} handleGreased={this.handleGreased}/>
        {this.renderHogTiles()}
      </div>
    )
  }
}


export default HogContainer
