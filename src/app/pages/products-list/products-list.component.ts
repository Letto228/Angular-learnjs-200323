import {Component, OnInit} from '@angular/core';
import {IProduct} from '../../shared/products/product.interface';
import {productsMock} from '../../shared/products/products.mock';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
	products: IProduct[] | undefined = undefined;

	ngOnInit() {
		setTimeout(() => {
			this.products = productsMock;
		}, 3000);
	}

	onBuy(id: IProduct['_id']) {
		console.log(`Buy product ${id}`);
	}
}
