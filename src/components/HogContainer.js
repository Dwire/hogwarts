import React, { Component } from 'react'
import hogs from '../porkers_data';

import HogTile from './HogTile'
import HogForm from './HogForm'

class HogContainer extends Component {

  renderHogTiles = () => {
    return hogs.map(hog => {
      return <HogTile hog={hog}/>
    })
  }

  handleFilter = (e) => {
    console.log(e)
  }

  handleGreased = (e) => {
    console.log(e)
  }

  render() {
    return(
      <div>
        <HogForm handleFilter={this.handleFilter}/>
        {this.renderHogTiles()}
      </div>
    )
  }
}


export default HogContainer
