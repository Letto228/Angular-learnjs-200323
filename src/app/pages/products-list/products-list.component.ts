import {ChangeDetectionStrategy, Component} from '@angular/core';
import {IProduct} from '../../shared/products/product.interface';
import {ProductsStoreService} from '../../shared/products/products-store.service';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap, tap} from 'rxjs';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
	readonly products$ = this.activatedRoute.paramMap.pipe(
		map(paramMap => paramMap.get('subCategoryId')),
		tap(subCategoryId => {
			this.productsStoreService.loadProducts(subCategoryId);
		}),
		switchMap(() => this.productsStoreService.products$),
	);

	constructor(
		private readonly productsStoreService: ProductsStoreService,
		private readonly activatedRoute: ActivatedRoute,
	) {}

	trackById(_index: number, item: IProduct): IProduct['_id'] {
		return item._id;
	}
}
