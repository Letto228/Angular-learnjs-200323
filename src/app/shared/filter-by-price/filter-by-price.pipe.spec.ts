import {FilterByPricePipe} from './filter-by-price.pipe';

describe('FilterByPricePipe', () => {
	it('create an instance', () => {
		const pipe = new FilterByPricePipe();
		expect(pipe).toBeTruthy();
	});
});
