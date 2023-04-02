import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from '../../../shared/products/product.interface';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent {
	@Input() product: IProduct | undefined;
	@Output() productBuy: EventEmitter<void> = new EventEmitter<void>();

	onProductBuy(event: Event) {
		event.stopPropagation();

		this.productBuy.emit();
	}

	isStarActive(starIndex: number): boolean {
		return !!this.product && this.product.rating >= starIndex;
	}
}
