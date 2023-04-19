import {Component} from '@angular/core';
import {IProduct} from 'src/app/shared/products/product.interface';
import {productMock} from 'src/app/shared/products/product.mock';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
	readonly prod = productMock;

	onCardBuyClick(id: IProduct['_id']) {
		console.log('Вторая Жмкалка на купить', id);
	}
}
