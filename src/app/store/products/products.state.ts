import {EntityState, createEntityAdapter} from '@ngrx/entity';
import {IProduct} from '../../shared/products/product.interface';

export const PRODUCTS_FEATURE = 'products';

export interface IProductsState extends EntityState<IProduct> {
	currentProductId: string | null;
}

export const productsAdapter = createEntityAdapter<IProduct>({
	selectId: ({_id}: IProduct) => _id,
	sortComparer: (a, b) => {
		if (a.name > b.name) {
			return 1;
		}

		if (a.name < b.name) {
			return -1;
		}

		return 0;
	},
});
