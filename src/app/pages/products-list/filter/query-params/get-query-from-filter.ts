import {IProductsFilter} from '../products-filter.interface';
import {IProductsFilterQueryParams} from './products-filter-query-params.interface';

export function getQueryFromFilter({
	name,
	brands,
	priceRange,
}: IProductsFilter): IProductsFilterQueryParams {
	return {
		name: name || undefined,
		brands: brands.length ? brands.join(',') : undefined,
		min: priceRange.min.toString(),
		max: priceRange.max.toString(),
	};
}
