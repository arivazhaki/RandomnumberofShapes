import { React } from 'react';
import './App.scss';
import Cake from './components/Cake';
import AutoBoxes from './components/AutoBoxes';
import RandomBoxes from './components/RandomBoxes';
import BoxRotations from './components/BoxRotations';
import NewGenerateBox from './components/NewGenerateBox';

const App = (context) =>
	<div className="App">
		<AutoBoxes { ...context }/>
		<RandomBoxes { ...context }/>
		<NewGenerateBox { ...context }/>
		<BoxRotations { ...context }/>
		<div className="oval"/>
		<div className="wick"/>
		<div className="candle"/>
		<div className="boxParentChild5"/>
		<div className="boxParentChild4"/>
		<div className="boxParentChild3"/>
		<div className="strawberryLeft"/>
		<div className="strawberryRight"/>
		<div className="seed"/>
		<Cake/>
	</div>;

export default App;
// <div className="container"/>
// 		<div className="box"/>
// 		<div className="boxChild"/>
// 		<div className="boxParentChild"/>
// 		<div className="boxParentChild2"/>
// 	</div>;
