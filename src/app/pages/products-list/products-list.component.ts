import {Component} from '@angular/core';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
	size = 4;
	image1 =
		'https://cdn.vietnammoi.vn/2019/10/3/gia-iphone-11-xach-tay-bat-ngo-ve-duoi-20-trieu-dong-15701184406251659163712.jpg';
	image2 =
		'https://www.hdretail.ru/upload/iblock/8d0/8d01c02a7a68c45e7d021d9d44efab9f.jpg';
	image3 =
		'http://ranbus.fra1.cdn.digitaloceanspaces.com/ranbus/media/images/2021/08/26/1629999515_HFxP8b1KqR.jpg';
	image4 = 'https://appleinsider.ru/wp-content/uploads/2022/05/14pro_renders.jpeg';

	items = [
		{id: 1, name: 'iphone 11', price: '12 000р', image: this.image1},
		{id: 2, name: 'iphone 12', price: '18 000р', image: this.image2},
		{id: 3, name: 'iphone 13', price: '36 000р', image: this.image3},
		{id: 4, name: 'iphone 14', price: '68 000р', image: this.image4},
	];

	clickDisable() {
		console.log('click card');
	}
}
