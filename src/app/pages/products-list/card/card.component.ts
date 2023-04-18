import {Component, EventEmitter, Input, Output} from '@angular/core';
// import {IApplicationConfig} from 'src/app/shared/application-config/application-config.interface';
// import {productMock} from '../../../shared/products/product.mock';
import {IProduct} from '../../../shared/products/product.interface';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent {
	@Input() cardConfig: IProduct | undefined;

	@Output() cardBuyClick = new EventEmitter<IProduct['_id']>();

	onProductBuy(event: Event) {
		event.stopPropagation();

		console.log('Buy product');
		this.cardBuyClick.emit(this.cardConfig?._id);
	}

	isStarActive(starIndex: number): boolean {
		//return this.product && this.product.rating >= starIndex;
		return true;
	}
}
