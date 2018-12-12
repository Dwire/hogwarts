import React from 'react'
import HogTile from './HogTile'

class HogsContainer extends React.Component {

  generateHogTile = () => {
    return this.props.hogs.map(hog => <HogTile hog={hog} />)
  }

  render(){
    return(
      <div class="ui grid container">
        {this.generateHogTile()}
      </div>
    )
  }
}


export default HogsContainer
