import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'filterByPropertyPipe',
})
export class FilterByPropertyPipe<T, K extends keyof T> implements PipeTransform {
	transform(value: T[], property: K, searchProperty: T[K]): T[] {
		return value.filter(item => {
			const value = item[property];
			if (typeof value === 'string') {
				return value.startsWith(String(searchProperty));
			}
			return value === searchProperty;
		});
	}
}
