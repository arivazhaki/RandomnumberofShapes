import config from './config';
import { rndString } from '@laufire/utils/random';

const refreshIDLength = 4;

const seed = {
	count: config.countStart,
	refreshID: rndString(refreshIDLength),
	randomNumber: '',
	boxCount: 4,
	boxesArray: [1, 1, 1, 1],
	shape: 'square',
	rotations: 0,
};

export default seed;