import {Component} from '@angular/core';
import {IProduct} from '../../shared/products/product.interface';
import {productMock} from '../../shared/products/product.mock';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
	readonly product = productMock;

	onBuy(id: IProduct['_id']) {
		console.log(`Buy product ${id}`);
	}
}
