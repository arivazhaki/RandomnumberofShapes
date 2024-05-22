/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable max-lines-per-function */

import React from 'react';
import SelectBoxnew from './selectBoxNew';

const RandomBoxes = (context) => {
	const {
		state: { randomNumber, boxesArray, shape },
		actions: { updateArray },
		config: { shapeStyles },
	} = context;

	return (
		<div>
			<button
				type="button"
				onClick={ () => updateArray(randomNumber) }
			>generateRandomBoxes</button>
			{ boxesArray.map((box, i) => <div
				key={ i }
				style={ { ...shapeStyles[shape] } }
			                             />) }
			<SelectBoxnew { ...context }/>
		</div>
	);
};

export default RandomBoxes;

// <div style={ {
// 	...shapeStyles[shape],
// 	...sizeStyles[size],
// 	backgroundColor: color,
// } }
// 	/>
