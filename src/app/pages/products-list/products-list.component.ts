import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	Inject,
	OnInit,
} from '@angular/core';
import {IProduct} from '../../shared/products/product.interface';
import {productsMock} from '../../shared/products/products.mock';
import {ProductsStoreService} from '../../shared/products/products-store.service';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
	// private readonly productsStoreService = new ProductsStoreService();

	readonly products$ = this.productsStoreService.products$;
	// products: IProduct[] | null = null;

	check: string[] | null = null;

	searchText = 'мы'; //с "Пл" ничего не начинается!

	propertyNameToFilter: keyof IProduct = 'feedbacksCount';
	searchProperty = '1';
	//cityName: any;
	//queryString: any;

	constructor(
		// @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
		// @Inject(ProductsStoreService) private readonly productsStoreService: ProductsStoreService,
		private readonly productsStoreService: ProductsStoreService, // private readonly changeDetectorRef: ChangeDetectorRef // @Inject('value') value: string, // @Inject('service') service: [ProductsStoreService, string],
	) {
		// console.log(value);
		// console.log(service[0] === productsStoreService)
		// console.log(service, productsStoreService)
		// this.changeDetectorRef.detach();
		// console.log(this.changeDetectorRef);
	}

	ngOnInit() {
		this.productsStoreService.loadProducts();

		// this.products$.subscribe(products => {
		// 	this.products = products;
		// 	this.changeDetectorRef.markForCheck();
		// });
		// this.changeDetectorRef.detectChanges();

		// setTimeout(() => {
		// 	this.products = productsMock;
		// 	this.changeDetectorRef.markForCheck();
		// this.changeDetectorRef.detectChanges();
		// }, 3000);

		// setTimeout(() => {
		// 	this.products = productsMock.slice(3, 8);
		// 	this.changeDetectorRef.markForCheck();
		// 	// this.changeDetectorRef.detectChanges();
		// }, 6000);

		// setTimeout(() => {
		// 	this.changeDetectorRef.reattach();
		// 	this.changeDetectorRef.markForCheck();
		// }, 7000);
	}

	trackById(_index: number, item: IProduct): IProduct['_id'] {
		return item._id;
	}
}
