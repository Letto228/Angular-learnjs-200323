import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IState} from '../reducer';
import {IProductsState, PRODUCTS_FEATURE, productsAdapter} from './products.state';
import {IProduct} from '../../shared/products/product.interface';

// export const productsFeatureSelector = (state: IState) => state[PRODUCTS_FEATURE];
export const productsFeatureSelector =
	createFeatureSelector<IProductsState>(PRODUCTS_FEATURE);

// export const currentProductIdSelector = (state: IState) => productsFeatureSelector(state).currentProductId
export const currentProductIdSelector = createSelector(
	productsFeatureSelector,
	(productsState: IProductsState) => productsState.currentProductId, // extractCb
);
// export const currentProductIdSelector = (state: IState) => extractCb(productsFeatureSelector(state))

// export const productIdsSelector = createSelector(
//     productsFeatureSelector,
//     (productsState: IProductsState) => productsState.ids, // extractCb
// )
// export const productIdsSelector = (state: IState): IProductsState['ids'] => extractCb(productsFeatureSelector(state))

// export const productEntitiesSelector = createSelector(
//     productsFeatureSelector,
//     (productsState: IProductsState) => productsState.entities,
// )

// export const productsSelector = createSelector(
//     productsFeatureSelector,
//     (productsState: IProductsState) => productsState.ids.map(id => productsState.entities[id] as IProduct), // extractCb
// )
// export const productIdsSelector = (state: IState): IProduct[] => extractCb(productsFeatureSelector(state))

// export const productsSelector = createSelector(
//     productIdsSelector,
//     productEntitiesSelector,
//     // (productsIds: IProductsState['ids'], productsEntities: IProductsState['entities']) => productsIds.map(id => productsEntities[id]), // extractCb
//     (productsIds, productsEntities) => productsIds.map(id => productsEntities[id] as IProduct), // extractCb
// )
// export const productsSelector = (state: IState): IProduct[] => extractCb(productIdsSelector(state), productEntitiesSelector(state))

export const {
	selectAll: productsSelector,
	selectEntities: productEntitiesSelector,
	selectIds: productIdsSelector,
} = productsAdapter.getSelectors(productsFeatureSelector);
// export const productsSelector = productsAdapter.getSelectors(productsFeatureSelector).selectAll;

// export const productIdsSelector = createSelector(
//     productsFeatureSelector,
//     // (productsState: IProductsState) => productsState.ids, // extractCb
//     selectIds, // extractCb
// )

// export const productEntitiesSelector = createSelector(
//     productsFeatureSelector,
//     selectEntities,
// )

// export const productsSelector = createSelector(
//     productsFeatureSelector,
//     // (productsState: IProductsState) => productsState.ids.map(id => productsState.entities[id] as IProduct), // extractCb
//     selectAll,
// )
