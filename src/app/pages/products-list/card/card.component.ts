import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from 'src/app/shared/products/product.interface';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent {
	@Input() product: IProduct | undefined;

	@Output() productBuy = new EventEmitter<string>();

	imageIndex = 0;

	isStarActive(starIndex: number): boolean {
		return !!this.product && this.product.rating >= starIndex;
	}

	onClick($event: MouseEvent) {
		$event.stopPropagation();
	}

	chevronClick(direction: 'right' | 'left') {
		event?.stopPropagation();
		const imageCount = this.product?.images.length;
		if (!imageCount) {
			return;
		}
		const lastImage = imageCount - 1;
		if (direction === 'right') {
			this.imageIndex = this.imageIndex === lastImage ? 0 : this.imageIndex + 1;
		} else {
			this.imageIndex = this.imageIndex === 0 ? lastImage : this.imageIndex - 1;
		}
	}

	getCurrentImage(): string | undefined {
		return this.product?.images[this.imageIndex].url;
	}
}
