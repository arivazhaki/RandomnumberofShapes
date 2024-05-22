const config = {
	shapeStyles: {
		square: {
			width: '100px',
			height: '100px',
			backgroundColor: 'blue',
			margin: '10px auto',
		},
		circle: {
			borderRadius: '50%',
			width: 100,
			height: 100,
			backgroundColor: 'red',
			margin: '10px auto',
		},
		rectangle: {
			width: '300px',
			height: '100px',
			backgroundColor: 'yellowgreen',
			margin: '10px auto',
		},
	},
	shapes: ['square', 'circle', 'rectangle'],

	rotationStyles: {
		30: { transform: 'rotate(30deg)' },
		45: { transform: 'rotate(45deg)' },
		60: { transform: 'rotate(60deg)' },
	},

	increment: ['30', '45', '60'],
};

export default config;
