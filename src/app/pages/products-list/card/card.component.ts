import {Component} from '@angular/core';
import {productMock} from '../../../shared/products/product.mock';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent {
	cardInfo = productMock;
	handlePurchase($event: MouseEvent) {
		$event.stopPropagation();
		$event.preventDefault();

		console.log('bought');
	}
}
