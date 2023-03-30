import {Component} from '@angular/core';
import {productMock} from 'src/app/shared/products/product.mock';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent {
	stars: number[] = [1, 2, 3, 4, 5];
	item = productMock;
	addToCart($event: MouseEvent) {
		$event.preventDefault();
		$event.stopPropagation();
	}
}
