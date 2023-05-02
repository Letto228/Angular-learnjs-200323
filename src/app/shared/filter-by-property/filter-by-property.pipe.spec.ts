import {productsMock} from '../products/products.mock';
import {FilterByPropertyPipe} from './filter-by-property.pipe';

describe('FilterByPropertyPipe', () => {
	// it('create an instance', () => {
	// 	const pipe = new FilterByPropertyPipe();
	// 	expect(pipe).toBeTruthy();
	// });

	const pipe = new FilterByPropertyPipe();

	it('Фильтрация по имени', () => {
		const transformValue = pipe.transform(productsMock, 'name', productsMock[0].name);

		expect(transformValue).toEqual([productsMock[0]]);
	});

	it('Фильтрация по имени - пустое значение', () => {
		const transformValue = pipe.transform(productsMock, 'name', '');

		expect(transformValue).toEqual(productsMock);
	});

	it('Фильтрация по id', () => {
		const transformValue = pipe.transform(productsMock, '_id', productsMock[2]._id);

		expect(transformValue).toEqual([productsMock[2]]);
	});

	it('Фильтрация по не существующему id', () => {
		const transformValue = pipe.transform(productsMock, '_id', 'not-found-id');

		expect(transformValue).toEqual([]);
	});
});
