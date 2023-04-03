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
	onProductBuy(product: IProduct) {
		console.log('Buy product: ', product.name);
	}
}
