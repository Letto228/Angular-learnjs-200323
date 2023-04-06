import {Component} from '@angular/core';
import {productMock} from 'src/app/shared/products/product.mock';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
	readonly cardConfig = productMock;
	onClick() {
		console.log('Card host element click');
	}
	onCardBuyClick() {
		console.log('Вторая Жмкалка на купить');
	}
}
