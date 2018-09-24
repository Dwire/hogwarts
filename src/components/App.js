import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';

import HogContainer from './HogContainer'
import HogFilter from './HogFilter'

class App extends Component {

  state = {
    sortBy: 'all',
    greased: false
  }

  handleGreased = () => {
    this.setState(prevState => ({greased: !prevState.greased}))
  }

  handleSearchTerm = (e) => {
    const term = e.target.value

    this.setState({sortBy: term})
  }

  sortByTerm = () => {
    const currentHogs = this.filterBYGreased()

    if (this.state.sortBy === 'name') {
        return currentHogs.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
    }else if (this.state.sortBy === 'weight') {
      return currentHogs.sort((a, b) => {
        return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
      })
    }else{
      return hogs
    }
  }

  filterBYGreased = () => {
    if (this.state.greased) {
      return hogs.filter(hog => hog.greased)
    }else {
      return hogs
    }
  }


  render() {
    console.log('STATE', this.state);
    return (
      <div className="App">
          <Nav />
          <HogFilter handleGreased={this.handleGreased} handleSearchTerm={this.handleSearchTerm}/>
          <HogContainer hogs={this.sortByTerm()}/>
      </div>
    )
  }
}

export default App;
