import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsFilterPipe} from './products-filter.pipe';

@NgModule({
	declarations: [ProductsFilterPipe],
	imports: [CommonModule],
	exports: [ProductsFilterPipe],
})
export class ProductsFilterModule {}
