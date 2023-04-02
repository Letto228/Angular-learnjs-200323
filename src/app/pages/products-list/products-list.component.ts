import {Component} from '@angular/core';
import {productMock} from '../../shared/products/product.mock';
import {IProduct} from '../../shared/products/product.interface';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
	readonly product: IProduct = productMock;
	onClick() {
		console.log('Card host element click');
	}
	onProductBuy([event, product]: [MouseEvent, IProduct]) {
		event.stopPropagation();

		console.log('Buy product: ', product.name);
	}
}
