import React from 'react'

import HogDetail from './HogDetail'

class HogTile extends React.Component {
  state = {
    clicked: false
  }


  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    let { hog } = this.props
    let { name, greased } = this.props.hog

    return(
      <div>
        <h1>{name}</h1>
        <h3>Greased: {greased ? "YUUP" : "NAAAA"}</h3>
        <button onClick={this.handleClick} >{this.state.clicked ? "Show Details" : "Hide Details"}</button>
        {this.state.clicked && <HogDetail hog={hog} />}
      </div>
    )
  }
}


export default HogTile
