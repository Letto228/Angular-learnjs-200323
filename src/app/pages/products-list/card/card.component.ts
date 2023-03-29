import { Component, Input } from '@angular/core';
import {IProduct} from "../../../shared/products/product.interface";
import {productMock} from "../../../shared/products/product.mock";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  product: IProduct = productMock;

  clickHandler(event: MouseEvent, id: string) {
    event.preventDefault();
    console.log(id);
  }
}
