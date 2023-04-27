import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card.module';
import {InsertShadowModule} from '../../shared/insert-shadow/insert-shadow.module';
import {DumpNgIfModule} from '../../shared/dump-ng-if/dump-ng-if.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ScrollWithLoadingModule} from '../../shared/scroll-with-loading/scroll-with-loading.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {PaginationModule} from '../../shared/pagination/pagination.module';
import {FilterByPropertyModule} from '../../shared/filter-by-property/filter-by-property.module';
import {RouterModule} from '@angular/router';
import {ProductsListRoutingModule} from './products-list-routing.module';
import {MatInputModule} from '@angular/material/input';
import {CounterInputModule} from '../../shared/counter-input/counter-input.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ValidatorsDirectivesModule} from '../../shared/validators/validators-directives/validators-directives.module';
import {FilterByPriceModule} from '../../shared/filter-by-price/filter-by-price.module';

@NgModule({
	declarations: [ProductsListComponent],
	exports: [ProductsListComponent],
	imports: [
		CommonModule,
		CardModule,
		InsertShadowModule,
		DumpNgIfModule,
		MatProgressSpinnerModule,
		ScrollWithLoadingModule,
		MatIconModule,
		MatButtonModule,
		MatSliderModule,
		PaginationModule,
		FilterByPropertyModule,
		RouterModule,
		ProductsListRoutingModule,
		MatInputModule,
		CounterInputModule,
		ReactiveFormsModule,
		FormsModule,
		ValidatorsDirectivesModule,
		FilterByPriceModule,
	],
})
export class ProductsListModule {}
