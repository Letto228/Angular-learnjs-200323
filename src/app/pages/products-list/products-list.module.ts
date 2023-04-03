import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CardModule} from './card/card.module';
import {ProductsListComponent} from './products-list.component';

@NgModule({
	declarations: [ProductsListComponent],
	imports: [CommonModule, CardModule],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
