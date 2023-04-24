import {ChangeDetectionStrategy, Component} from '@angular/core';
import {filter, map, switchMap, tap} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {ProductsStoreService} from '../../shared/products/products-store.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
	readonly product$ = this.activatedRoute.paramMap.pipe(
		map(paramsMap => paramsMap.get('productId')),
		filter(Boolean),
		tap(productId => {
			this.productsStoreService.loadProduct(productId);
		}),
		switchMap(() => this.productsStoreService.currentProduct$),
	);

	constructor(
		private readonly activatedRoute: ActivatedRoute,
		private readonly productsStoreService: ProductsStoreService,
	) {}
}
