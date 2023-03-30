import {Component} from '@angular/core';
import {productMock} from '../../../shared/products/product.mock';
import {IProduct} from '../../../shared/products/product.interface';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent {
	product: IProduct = productMock;

	onBuyClick(event: MouseEvent) {
		event.stopPropagation();
		console.log('Buy');
	}
}
