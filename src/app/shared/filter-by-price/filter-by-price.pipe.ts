import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'filterByPrice',
})
export class FilterByPricePipe implements PipeTransform {
	transform(
		items: any[] | undefined | null,
		searchingProperty: string,
		searchValueMin: number | null,
		searchValueMax: number | null,
	) {
		if (!items?.length) {
			return items;
		}

		if (searchValueMin && searchValueMax) {
			return items.filter(
				item =>
					item[searchingProperty] > searchValueMin &&
					item[searchingProperty] < searchValueMax,
			);
		}
		if (searchValueMin) {
			return items.filter(item => item[searchingProperty] > searchValueMin);
		}
		if (searchValueMax) {
			return items.filter(item => item[searchingProperty] < searchValueMax);
		}

		if (!searchValueMin && !searchValueMax) {
			return items;
		}

		return items;
	}
}
