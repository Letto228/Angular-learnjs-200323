import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from '../products/product.interface';

@Pipe({
	name: 'filterBy',
})
export class FilterByPipe implements PipeTransform {
	transform(
		products: IProduct[],
		property: keyof IProduct,
		value: number | string,
	): IProduct[] | null {
		/*  Егор, я пока не силен в TS, поэтому, предположим,
        что к нам приходят только два типа:
        string и number.
     */

		if (typeof value === 'string') {
			return products.filter(product =>
				product[property]
					.toString()
					.toUpperCase()
					.startsWith(value.toString().toUpperCase()),
			);
		}

		return products.filter(product => product[property] === value);
	}
}
