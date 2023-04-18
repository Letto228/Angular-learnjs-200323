import {IProductImage} from './product-image.interface';

export interface IProduct {
	_id: string;
	name: string;
	price: number;
	text: string;
	images: IProductImage[];
	subCategory: string;
	feedbacksCount: number;
	rating: number;
}
