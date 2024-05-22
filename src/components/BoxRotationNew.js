import React, { useState } from 'react';
const a = 45;

const BoxRotationNew = () => {
	const [rotation, setRotation] = useState(0);

	const rotateBox = () => {
		setRotation(rotation + a);
	};

	return (
		<div>
			<div
				style={ {
					width: '200px',
					height: '200px',
					backgroundColor: 'red',
					transform: `rotate(${ rotation }deg)`,
					transition: 'transform 1s',
				} }
			/>
			<button onClick={ rotateBox }>Rotate</button>
		</div>
	);
};

export default BoxRotationNew;
