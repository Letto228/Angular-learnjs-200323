import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'filterByProperty',
})
export class ProductsFilterPipe implements PipeTransform {
	transform<T>(value: Array<T>, property: keyof T, search: string | number | boolean | null): Array<T> {
		return value.filter((item: T) => {
			switch (typeof item[property]) {
				case 'string':
					return String(item[property]).startsWith(search as string);
				case 'number':
					return item[property] === parseFloat(search as string);
				case 'boolean':
					return item[property] === (search === 'false' ? false : !!search);
				default:
					return item[property] === search;
			}
		});
	}
}
