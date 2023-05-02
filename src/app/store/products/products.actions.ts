import {createAction} from '@ngrx/store';
import {IProduct} from '../../shared/products/product.interface';

export enum ProductsActionTypes {
	AddProducts = '[Products] Add products',
}

export const addProducts = createAction(
	ProductsActionTypes.AddProducts,
	(products: IProduct[]) => ({products}),
);
