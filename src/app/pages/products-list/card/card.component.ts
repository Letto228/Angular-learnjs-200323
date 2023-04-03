import {Component, Input} from '@angular/core';
import {IProduct} from 'src/app/shared/products/product.interface';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent {
	@Input()
	product!: IProduct;

	onProductBuy(event: Event) {
		event.stopPropagation();

		console.log('Buy product');
	}

	isStarActive(starIndex: number): boolean {
		return this.product && this.product.rating >= starIndex;
	}
}
