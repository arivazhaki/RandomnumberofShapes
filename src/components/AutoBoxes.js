/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable max-lines-per-function */
import { React } from 'react';

const AutoBoxes = (context) => {
	const {
		state: { boxCount, boxesArray },
		actions: { setBoxes, updateArray },
		config: { square },
	} = context;

	return <div>
		<label>Enter number of Boxes:</label>
		<input
			type="number"
			onChange={ (event) =>
				setBoxes(event.target.value) }
		/>
		<button
			type="button"
			onClick={ () => updateArray(boxCount) }
		>Boxes</button>
		{ boxesArray.map((box, i) => <div
			key={ i }
			style={ square }
		                             />) }
	</div>;
};

export default AutoBoxes;
