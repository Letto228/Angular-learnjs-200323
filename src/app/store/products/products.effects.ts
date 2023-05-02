import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs';
import {addProducts, loadProducts} from './products.actions';
import {ProductsApiService} from '../../shared/products/products-api.service';

@Injectable({providedIn: 'root'})
export class ProductsEffects {
	constructor(
		private readonly action$: Actions,
		private readonly productsApiService: ProductsApiService,
	) {}

	loadProducts$ = createEffect(() =>
		this.action$.pipe(
			ofType(loadProducts),
			switchMap(({subCategoryId}) =>
				this.productsApiService
					.getProducts$(subCategoryId)
					.pipe(map(products => addProducts(products))),
			),
		),
	);
}
