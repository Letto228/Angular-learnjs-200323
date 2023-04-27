import {EntityState, createEntityAdapter} from '@ngrx/entity';
import {IProduct} from '../../shared/products/product.interface';

export const PRODUCTS_FEATURE = 'products';

// export interface IProductsState extends Array<IProduct> {}
// export type IProductsState = Array<IProduct>;
// export interface IProductsState {
//     entities: {[id: string]: IProduct},
//     ids: string[], // ids.map(id => entities[id])
// }
// export type IProductsState = EntityState<IProduct>;
export interface IProductsState extends EntityState<IProduct> {
	currentProductId: string | null;
}

// {[id: string]: IProduct}

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
