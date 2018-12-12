import React from 'react'

// class HogDetail extends React.Component {
//   const
//   render(){
//     return(
//       <h1>TEST</h1>
//     )
//   }
// }
const HogDetail = ({hog}) => {
  console.log(hog)
  return(
    <ul>
      <li>Specialty: {hog.specialty}</li>
      <li>Medal: {hog["highest medal achieved"]}</li>
      <li>Weight: {hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</li>
    </ul>
  )
}

export default HogDetail
