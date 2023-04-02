import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from '../../../shared/products/product.interface';
import {IProductImage} from "../../../shared/products/product-image.interface";

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent {
	@Input() product: IProduct | undefined;

  @Output() bayBtnClick = new EventEmitter<string>();

	onProductBuy(event: Event) {
		event.stopPropagation();

		console.log('Buy product');
	}

  getTitleImage():IProductImage | undefined {
    return this.product?.images[0];
  }

	isStarActive(starIndex: number): boolean {
		return !!this.product && this.product.rating >= starIndex;
	}
}
