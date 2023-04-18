import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from '../products/product.interface';

@Pipe({
	name: 'filterBy',
})
export class FilterByPipe implements PipeTransform {
	transform(
		products: IProduct[],
		property: keyof IProduct,
		value: any,
	): IProduct[] | null {
		// if (!products.length) return products

		if (isNaN(value)) {
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
