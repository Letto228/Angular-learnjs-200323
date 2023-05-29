import {
	ChangeDetectionStrategy,
	Component,
	Host,
	Inject,
	OnInit,
	Optional,
	Self,
	SkipSelf,
	TemplateRef,
	ViewChild,
} from '@angular/core';
import {IProduct} from '../../shared/products/product.interface';
import {ProductsStoreService} from '../../shared/products/products-store.service';
import {PopupHostService} from 'src/app/core/popup-host/popup-host.service';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: 'name',
			useValue: 'ProductsListComponent',
		},
	],
})
export class ProductsListComponent implements OnInit {
	readonly products$ = this.productsStoreService.products$;
	@ViewChild('popupTemplate') popupTemplate!: TemplateRef<unknown>;

	constructor(
		private readonly productsStoreService: ProductsStoreService,
		private readonly popupHostService: PopupHostService,
		@Inject('name') @Optional() @Self() private readonly name: string,
		@Inject('name') @Optional() @SkipSelf() private readonly parentName: string,
		@Inject('name') @Optional() @Host() @SkipSelf() private readonly hostName: string,
	) {
		console.log(`Self: ${this.name}`);
		console.log(`Host: ${this.hostName}`);
		console.log(`SkipSelf: ${this.parentName}`);
	}

	ngOnInit() {
		this.productsStoreService.loadProducts();
	}

	trackById(_index: number, item: IProduct): IProduct['_id'] {
		return item._id;
	}

	setTemplate() {
		this.popupHostService.setPopupTemplate(this.popupTemplate);
	}
}
