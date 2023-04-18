import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from '../products/product.interface';

@Pipe({
	name: 'filterByProperty',
})
export class ProductsFilterPipe implements PipeTransform {
	transform<T>(value: Array<T>, property: keyof T, search: string): Array<T> {
		return value.filter((item: T) => {
			switch (typeof item[property]) {
				case 'string':
					return String(item[property]).startsWith(search);
				case 'number':
					return item[property] === parseFloat(search);
				default:
					return item[property] == search;
			}
		});
	}
}
