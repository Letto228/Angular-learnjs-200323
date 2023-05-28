import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from '../products/product.interface';

@Pipe({
	name: 'productsFilter',
})
export class ProductsFilterPipe implements PipeTransform {
	transform(
		value: IProduct[],
		propertyNameToFilter: keyof IProduct,
		searchProperty: string,
	): IProduct[] {
		return value.filter(product =>
			product[propertyNameToFilter]
				.toString()
				.toLowerCase()
				.includes(searchProperty.toLowerCase()),
		);
	}
}
