import React from 'react'

const HogDetail = ({hog}) => {
	// console.log(props);
	return (
		<div>
	    <h4>Specialty: {hog.specialty}</h4>
	    <h4 className="achievementText">Medal: {hog['highest medal achieved']}</h4>
	    <h4>Wieght: {hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h4>
		</div>
	)
}

export default HogDetail
