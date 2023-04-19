import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from '../../../shared/products/product.interface';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent {
	@Input() prod: IProduct | undefined;

	@Output() cardBuyClick = new EventEmitter<IProduct['_id']>();

	onProductBuy(event: Event) {
		event.stopPropagation();
		const id = this.prod?._id;
		console.log('Buy product', id);
		this.cardBuyClick.emit(id);
	}

	isStarActive(starIndex: number): boolean {
		return Boolean(this.prod && this.prod.rating >= starIndex);
	}
}
