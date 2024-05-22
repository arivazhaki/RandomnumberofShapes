import React from 'react';
import { peek } from '@laufire/utils/debug';

const SelectBoxNew = ({ actions, config: { shapes }}) => {
	peek(shapes);
	return (
		<select
			onChange={ (event) => actions.setShape(event.target.value) }
		>
			{ shapes.map((newValue, index) =>
				<option
					key={ index }
					value={ newValue }
				>
					{ newValue }
				</option>) }
		</select>
	);
};

export default SelectBoxNew;
