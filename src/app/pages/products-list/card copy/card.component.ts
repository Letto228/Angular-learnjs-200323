import {Component} from '@angular/core';
import {productMock} from '../../../shared/products/product.mock';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent {
	readonly product = productMock;

	onProductBuy(event: Event) {
		event.stopPropagation();

		console.log('Buy product');
	}

	isStarActive(starIndex: number): boolean {
		return this.product && this.product.rating >= starIndex;
	}
}
