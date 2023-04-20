import {Component} from '@angular/core';
import {IProduct} from '../../shared/products/product.interface';
import {productsMock} from '../../shared/products/products.mock';

enum LoadDirection {
	Before = 'before',
	After = 'after',
}

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
	products: IProduct[] | undefined = undefined;

	// @ViewChildren(CardComponent, {read: ViewContainerRef})
	// private readonly cardsComponent!: QueryList<ViewContainerRef>;

	// @ViewChild('additionalCards', {static: true})
	// private readonly additionalCarsTemplateRef!: TemplateRef<unknown>;
	// @ViewChild('viewport', {static: true, read: ViewContainerRef})
	// private readonly viewport!: ViewContainerRef;
	// @ViewChild('template', {static: true, read: ViewContainerRef})
	// private readonly templateContainer!: ViewContainerRef;
	// @ViewChild('template', {static: true, read: TemplateRef})
	// private readonly template!: TemplateRef<unknown>;

	ngOnInit() {
		// console.log(this.cardsComponent);

		setTimeout(() => {
			this.products = productsMock;
		}, 1000);
		// setTimeout(() => {
		// 	this.products = undefined;
		// }, 5000);

		// setTimeout(() => {
		// 	this.viewport.createEmbeddedView(this.additionalCarsTemplateRef);
		// }, 5000);
	}

	// ngAfterViewInit() {
	// console.log(this.cardsComponent);
	// this.cardsComponent.changes.subscribe((queryList: QueryList<ViewContainerRef>) => {
	// 	console.log(queryList);
	// })
	// }

	onLoad(event: LoadDirection) {
		console.log(`Загружаем куда: ${event}`);
	}

	get calculateProducts(): IProduct[] | undefined {
		// console.log('calculated');

		return this.products;
	}

	onBuy(id: IProduct['_id']) {
		console.log(`Buy product ${id}`);
	}
}
