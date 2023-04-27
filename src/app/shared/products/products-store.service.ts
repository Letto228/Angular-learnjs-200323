import {Injectable} from '@angular/core';
import {BehaviorSubject, filter, Observable} from 'rxjs';
import {IProduct} from './product.interface';
import {ProductsApiService} from './products-api.service';
import {IState} from '../../store/reducer';
import {Store} from '@ngrx/store';
import {addProducts} from '../../store/products/products.actions';

@Injectable({
	providedIn: 'root',
})
export class ProductsStoreService {
	private readonly productsStore$ = new BehaviorSubject<IProduct[] | null>(null);
	private readonly currentProductStore$ = new BehaviorSubject<IProduct | null>(null);

	constructor(
		private readonly productsApiService: ProductsApiService,
		private readonly store$: Store<IState>,
	) {}

	get products$(): Observable<IProduct[] | null> {
		return this.productsStore$.asObservable();
	}

	get currentProduct$(): Observable<IProduct | null> {
		return this.currentProductStore$.asObservable();
	}

	loadProducts(subcategoryId?: string | null) {
		this.productsStore$.next(null);

		this.productsApiService.getProducts$(subcategoryId).subscribe(products => {
			this.productsStore$.next(products);
			this.store$.dispatch(addProducts(products));
		});
	}

	loadProduct(productId: string) {
		const productPreview = this.productsStore$.value?.find(
			({_id}) => _id === productId,
		);

		this.currentProductStore$.next(productPreview || null);

		this.productsApiService
			.getProduct$(productId)
			.pipe(filter(Boolean))
			.subscribe(product => {
				this.currentProductStore$.next(product);
			});
	}
}
