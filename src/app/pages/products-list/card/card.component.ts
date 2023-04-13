import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output,
	SimpleChanges,
} from '@angular/core';
import {IProduct} from '../../../shared/products/product.interface';
import {currency} from '../../../shared/currency/currency';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
	@Input() product!: IProduct;

	@Output() buy = new EventEmitter<IProduct['_id']>();

	// readonly currency = currency
	// currency(price: number): string {
	// 	console.log('currency from component');
	// 	return currency(price)
	// }

	onProductBuy(event: Event) {
		event.stopPropagation();

		this.buy.emit(this.product?._id);
	}

	isStarActive(starIndex: number): boolean {
		return Boolean(this.product && this.product.rating >= starIndex);
	}
}
