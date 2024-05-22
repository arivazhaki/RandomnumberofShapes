/* eslint-disable no-undef */
const increaseCount = ({ state, data }) => ({ count: state.count + data });
const setRandomNumber = ({ data }) => ({ randomNumber: data });
const setBoxes = ({ data }) => ({ boxCount: data });
const setShape = ({ data }) => ({ shape: data });
const updateArray = ({ data }) =>
	({ boxesArray: new Array(Number(data)).fill(null) });
const setDirection = ({ state, data }) =>
	({ rotations: state.rotations + data });

const actions = {
	increaseCount,
	setRandomNumber,
	setBoxes,
	updateArray,
	setShape,
	setDirection,
};

export default actions;
