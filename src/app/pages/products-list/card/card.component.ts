import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IApplicationConfig} from 'src/app/shared/application-config/application-config.interface';
import {productMock} from '../../../shared/products/product.mock';
import {IProduct} from '../../../shared/products/product.interface';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent {
	readonly product = productMock;

	@Input() cardConfig: IProduct | undefined;
	@Output() cardBuyClick = new EventEmitter<Event>();

	onProductBuy(event: Event) {
		event.stopPropagation();

		console.log('Buy product');
	}

	isStarActive(starIndex: number): boolean {
		return this.product && this.product.rating >= starIndex;
	}
}
