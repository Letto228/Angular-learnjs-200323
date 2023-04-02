import {Component} from '@angular/core';
import {IProduct} from "../../shared/products/product.interface";
import {productMock} from "../../shared/products/product.mock";

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  product: IProduct = productMock;

  bayHandler(id:string) {
    console.log("bay product:", id);
  }

	onClick() {
		console.log('Card host element click');
	}
}
