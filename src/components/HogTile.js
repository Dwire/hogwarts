import React, {Component} from 'react'

import HogDetail from './HogDetail'

class HogTile extends Component {
  state = {
    details: false
  }

  handleClick = () => {
    this.setState({
      details: !this.state.details
    })
  }

  imagePath = () => {
    const newName = this.props.hog.name.split(" ").join("_").toLowerCase()
    const slugPath = require(`../hog-imgs/${newName}.jpg`)
    return slugPath
  }

  render(){
    let { hog } = this.props
    let {name, greased} = this.props.hog

    return(
      <div class="ui four wide column">
        <img src={this.imagePath()} alt="Hogo"/>
        <h3>Name: {name}</h3>
        <p>Is Greased?: {greased ? 'YUUUP' : 'DRY'}</p>
        <button onClick={this.handleClick}>{this.state.details ? "Hide Details" : "Show Details"}</button>
        {this.state.details ? <HogDetail hog={ hog }/> : null}
      </div>
    )
  }
}


export default HogTile
