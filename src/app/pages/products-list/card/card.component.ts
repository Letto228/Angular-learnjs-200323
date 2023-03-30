import {Component} from '@angular/core';
import {productMock} from '../../../shared/products/product.mock';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent {
	cardParameters = {
		price: productMock.price,
		name: productMock.name,
		imageSrc: productMock.images[0].url,
		rating: productMock.rating,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad eaque eligendi, laudantium, minima molestias nam nobis nulla obcaecati odio, optio pariatur possimus quidem repellendus rerum sed sequi sit voluptatem?',
	};

	onBuyClick(event: MouseEvent) {
		event.stopPropagation();
		console.log('Buy');
	}
}
