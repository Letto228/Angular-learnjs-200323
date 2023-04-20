import {
	ChangeDetectionStrategy,
	Component,
	Host,
	Inject,
	OnInit,
	Optional,
	Self,
	SkipSelf,
} from '@angular/core';
import {IProduct} from '../../shared/products/product.interface';
import {ProductsStoreService} from '../../shared/products/products-store.service';
import {Router} from '@angular/router';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
	readonly products$ = this.productsStoreService.products$;

	constructor(
		private readonly productsStoreService: ProductsStoreService,
		private readonly router: Router,
		@Inject('name') private readonly name: string,
	) {
		console.log(this.name, 'ProductsListComponent');
	}

	ngOnInit() {
		this.productsStoreService.loadProducts();
	}

	trackById(_index: number, item: IProduct): IProduct['_id'] {
		return item._id;
	}

	navigateToProduct() {
		this.router.navigate(['/product', 'id']);
		this.router.navigateByUrl('/product/id');
	}
}
