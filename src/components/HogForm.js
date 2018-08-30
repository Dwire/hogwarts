import React  from 'react';

export default ({handleSortBy, handleGreased}) => {
  return (
    <div>
      <div>
        <label>Sort By</label>
      </div>
      <div onChange={handleSortBy}>
        <label>name</label>
        <input type='radio' value='name' name='radio'></input>
        <label>weight</label>
        <input type='radio' value='weight' name='radio'></input>
      </div>
      <div>
        <label>Greased?</label>
      </div>
      <div>
        <input type="checkbox" onChange={handleGreased}/>
      </div>
    </div>
  )
}
