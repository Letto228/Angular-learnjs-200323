import {Component} from '@angular/core';
import {IProduct} from '../../shared/products/product.interface';
import {productMock} from '../../shared/products/product.mock';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
	public products: IProduct = productMock;
	public productByID!: string;

	onClick() {
		console.log('Card host element click');
	}

	productByIDHunter(id: string) {
		this.productByID = id;
		console.log('Product by ID: ', this.productByID);
	}
}
