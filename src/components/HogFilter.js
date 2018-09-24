import React from 'react'

const HogFilter = ({handleGreased, handleSearchTerm}) => {
  return (
    <div>
      <label>Sort By: </label>
      <select onChange={handleSearchTerm}>
        <option value="all">All</option>
        <option value="weight">Weight</option>
        <option value="name">Name</option>
      </select>
      <label>  Greased?   </label>
      <input type="checkbox" onChange={handleGreased} />
    </div>
  )
}

export default HogFilter
