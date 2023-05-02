import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IProductsState, PRODUCTS_FEATURE, productsAdapter} from './products.state';

export const productsFeatureSelector =
	createFeatureSelector<IProductsState>(PRODUCTS_FEATURE);

export const currentProductIdSelector = createSelector(
	productsFeatureSelector,
	(productsState: IProductsState) => productsState.currentProductId,
);

export const {
	selectAll: productsSelector,
	selectEntities: productEntitiesSelector,
	selectIds: productIdsSelector,
} = productsAdapter.getSelectors(productsFeatureSelector);
