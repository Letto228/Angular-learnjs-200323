import {ChangeDetectorRef, Pipe, PipeTransform} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

@Pipe({
	name: 'productsFilter',
	//pure: false,
	//this.changeDetectorRef.markForCheck();
})
export class ProductsFilterPipe implements PipeTransform {
	transform(value: any, input: string) {
		if (input) {
			input = input.toLowerCase();
			return value.filter(function (el: any) {
				// return el.name.toLowerCase().indexOf(input) > -1;
				return el.name.toLowerCase().startsWith(input) > 0;
			});
		}
		return value;
	}
}
