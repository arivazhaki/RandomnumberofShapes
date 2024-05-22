import { React } from 'react';

const a = 10;
const NewGenerateBox = (context) => {
	const {
		state: { randomNumber },
		actions: { setRandomNumber },
	} = context;

	const randomNum = Math.floor(Math.random() * a) + 1;

	return (
		<div>
			<h2>Random Number: { randomNumber }</h2>
			<button onClick={ () => setRandomNumber(randomNum) }>
				Generate Random Number
			</button>
		</div>
	);
};

export default NewGenerateBox;
