import {Pipe, PipeTransform} from '@angular/core';
import {currency} from './currency';

@Pipe({
	name: 'currency',
	pure: true,
})
export class CurrencyPipe implements PipeTransform {
	transform(value: number, symbol: string): string {
		return currency(value, symbol);
	}
}
