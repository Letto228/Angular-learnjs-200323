export interface IProductsFilterForm {
	name: string;
	brands: Record<string, boolean>;
	priceRange: {
		min: number;
		max: number;
	};
}
