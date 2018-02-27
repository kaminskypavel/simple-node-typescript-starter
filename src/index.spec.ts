import {generatePanda} from './index';

describe('#generatePanda', () => {
	it('should return the a kung-fu panda', () => {
		expect(generatePanda()).toEqual({
			name: 'kung-fu',
			type: 'bear'
		});
	});

	it('shouldnt be null', () => {
		expect(generatePanda()).not.toBe(null);
	});
});
