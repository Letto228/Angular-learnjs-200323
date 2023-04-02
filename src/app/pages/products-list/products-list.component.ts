import {Component} from '@angular/core';
import {productMock} from '../../shared/products/product.mock';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
	readonly product = productMock;
	onClick() {
		console.log('Card host element click');
	}

	onProductBuy() {
		console.log('Buy product');
	}
}
