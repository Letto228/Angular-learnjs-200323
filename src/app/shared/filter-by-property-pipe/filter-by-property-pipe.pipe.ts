import {ChangeDetectorRef, Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'filterByPropertyPipe',
})
export class FilterByPropertyPipe<T, K extends keyof T> implements PipeTransform {
	constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}
	transform(value: T[], property: K, searchProperty: T[K]): T[] {
		this.changeDetectorRef.markForCheck();
		return value.filter(item => {
			if (typeof item[property] === 'string') {
				return (item[property] as string).startsWith(String(searchProperty));
			}
			return item[property] === searchProperty;
		});
	}
}
