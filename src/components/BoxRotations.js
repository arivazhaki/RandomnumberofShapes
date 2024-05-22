/* eslint-disable max-lines-per-function */
import { React } from 'react';

const BoxRotations = (context) => {
	const {
		state: { rotations },
		actions: { setDirection },
		config: { increment },
	} = context;
	const deg = increment[0];

	return (
		<div>
			<div style={ {
				width: '200px',
				height: '200px',
				backgroundColor: 'violet',
				margin: '50px auto',
				transform: `rotate(${ rotations }deg)`,
			} }
			/>
			<button
				type="button"
				onClick={ () => setDirection(deg) }
			>rotateBox
			</button>
		</div>);
};

export default BoxRotations;
