import {NgModule} from '@angular/core';
import {FilterByPricePipe} from './filter-by-price.pipe';

@NgModule({
	declarations: [FilterByPricePipe],
	exports: [FilterByPricePipe],
})
export class FilterByPriceModule {}
