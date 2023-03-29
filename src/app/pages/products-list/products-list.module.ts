import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsListComponent} from './products-list.component';
import { CardComponent } from './card/card.component';

@NgModule({
	declarations: [ProductsListComponent, CardComponent],
	imports: [CommonModule],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
