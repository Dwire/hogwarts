import React from 'react'

const HogDetails = (props) => {
  const {specialty, greased} = props.hog
  const weight = props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
  const medal = props.hog['highest medal achieved']

  return (
    <div>
      <p>{greased ? 'YUUUP' : 'NAAAA'}</p>
      <p>specialty: {specialty}</p>
      <p>Weight: {weight}</p>
      <p>Medal: {medal}</p>
    </div>
  )
}

export default HogDetails
