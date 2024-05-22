import { React } from 'react';
import SelectBoxnew from './SelectBoxnew';

const Size = (context) => {
	const { config: { shapeStyles }, state: { shape }} = context;

	return <div>
		<div style={ { ...shapeStyles[shape] } }/>
		<SelectBoxnew { ...context }/>
	</div>;
};

export default Size;
