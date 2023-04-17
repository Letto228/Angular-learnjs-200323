import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from '../products/product.interface';

@Pipe({
	name: 'filterByProperty',
})
export class ProductsFilterPipe implements PipeTransform {
	transform(value: IProduct[], property: keyof IProduct, search: string): IProduct[] {
		return value.filter((item: IProduct) => {
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
