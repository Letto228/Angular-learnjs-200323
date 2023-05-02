import {IProductsFilter} from '../products-filter.interface';
import {IProductsFilterQueryParams} from './products-filter-query-params.interface';

export function getFilterFromQuery({
	name,
	brands,
	min,
	max,
}: IProductsFilterQueryParams): IProductsFilter {
	return {
		name: name || '',
		brands: brands ? brands.split(',') : [],
		priceRange: {
			min: Number(min) || 0,
			max: Number(max) || 999999,
		},
	};
}
