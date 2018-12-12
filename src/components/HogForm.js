import React, {Component} from 'react'

class HogForm extends Component {
  render(){
    return(
      <div>
        <label>Filter By...</label>
        <select onChange={this.props.handleFilter}>
          <option value="all">All</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
        <label>Greased?</label>
        <input type="checkbox" onChange={this.props.handleGreased} />
      </div>
    )
  }
}


export default HogForm
