import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {filter, map, switchMap, tap} from 'rxjs';
import {ProductsActionTypes, addProducts, loadProducts} from './products.actions';
import {ProductsApiService} from '../../shared/products/products-api.service';
import {Store} from '@ngrx/store';
import {IState} from '../reducer';

@Injectable({providedIn: 'root'})
export class ProductsEffects {
	constructor(
		private readonly action$: Actions,
		private readonly productsApiService: ProductsApiService,
	) // private readonly store$: Store<IState>,
	{}

	loadProducts$ = createEffect(() =>
		this.action$.pipe(
			// filter(action => action.type === ProductsActionTypes.LoadProducts),
			// filter(action => action.type === loadProducts.type),
			ofType(loadProducts),
			switchMap(({subCategoryId}) =>
				this.productsApiService
					.getProducts$(subCategoryId)
					.pipe(map(products => addProducts(products))),
			),
		),
	);

	// loadProducts$ = createEffect(() => this.action$.pipe(
	//     // filter(action => action.type === ProductsActionTypes.LoadProducts),
	//     // filter(action => action.type === loadProducts.type),
	//     ofType(loadProducts),
	//     switchMap(({subCategoryId}) => this.productsApiService
	//         .getProducts$(subCategoryId)
	//         .pipe(
	//         //     map(products => addProducts(products))
	//             tap(products => {
	//                 this.store$.dispatch(addProducts(products));
	//             })
	//         )
	//     )
	// ), {dispatch: false})

	addProducts$ = createEffect(
		() =>
			this.action$.pipe(
				ofType(addProducts),
				tap(action => {
					console.log('Products from effects', action);
				}),
			),
		{dispatch: false},
	);
}
