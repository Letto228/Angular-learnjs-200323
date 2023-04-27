import {createReducer, on} from '@ngrx/store';
import {IProductsState, productsAdapter} from './products.state';
import {addProducts} from './products.actions';

const initialState: IProductsState = productsAdapter.getInitialState({
	currentProductId: null,
});

export const productsReducer = createReducer(
	initialState,
	on(addProducts, (state, {products}) => productsAdapter.setAll(products, state)),
);
