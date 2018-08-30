import React from 'react';


export default ({hog}) => {
  return (
    <div>
      <h3>greased: {hog.greased ? 'YES' : 'NO'}</h3>
      <p>weight: {hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
      <p>medal: {hog['highest medal achieved']}</p>
    </div>
  )
}

// export default HogDetails;
