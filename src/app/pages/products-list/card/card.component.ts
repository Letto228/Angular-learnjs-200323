import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from '../../../shared/products/product.interface';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent {
	// @Input() product = {} as IProduct - как правильно/лучше, так?
	@Input() product!: IProduct; // или так?
	@Output() productByChange: EventEmitter<string> = new EventEmitter<string>();

	onProductBuy(event: Event, productID: string) {
		event.stopPropagation();
		this.productByChange.emit(productID);
		console.log('Buy product: ', productID);
	}

	isStarActive(starIndex: number): boolean {
		return this.product && this.product.rating >= starIndex;
	}
}
