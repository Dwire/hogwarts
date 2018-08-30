import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';

import HogContainer from './HogContainer'
import HogForm  from './HogForm'

class App extends Component {
  state = {
    sortBy: "all",
    greased: false
  }

  handleSortBy = (e) => {
    const term = e.target.value
    this.setState({sortBy: term})
  }

  handleGreased = () => {
    this.setState({greased: !this.state.greased})
  }

  sortByGreased = () => {
    if (this.state.greased) {
    return hogs.filter(hog => {
      return hog.greased
    })
    }else {
      return hogs
    }
  }

  sortByString = () => {
    const finalHogList = this.sortByGreased()
    if (this.state.sortBy === 'name') {
        return finalHogList.sort((a,b) => {
          return a.name.localeCompare(b.name)
        })
    }else if (this.state.sortBy === 'weight') {
      return finalHogList.sort((a,b) => {
        return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
      })
    }else{
      return finalHogList
    }
  }


  render() {
    console.log(this.state.sortBy);
    return (
      <div className="App">
        < Nav />
        < HogForm handleSortBy={this.handleSortBy} handleGreased={this.handleGreased}/>
        < HogContainer sortByString={this.sortByString()}/>
      </div>
    )
  }
}

export default App;
