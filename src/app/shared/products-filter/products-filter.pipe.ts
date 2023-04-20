import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from '../products/product.interface';

@Pipe({
	name: 'productsFilter',
	//pure: false,
	//this.changeDetectorRef.markForCheck();
})
export class ProductsFilterPipe implements PipeTransform {
	transform(value: IProduct[], input: string) {
		if (input) {
			const input2 = input.toLowerCase();
			return value.filter(function (el: any) {
				// return el.name.toLowerCase().indexOf(input) > -1;
				return el.name.toLowerCase().startsWith(input2);
			});
		}
		return value;
	}
}
