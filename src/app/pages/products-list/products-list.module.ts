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
import {PaginationModule} from '../../shared/pagination/pagination.module';
import {FilterByModule} from '../../shared/filter-by/filter-by.module';

@NgModule({
	declarations: [ProductsListComponent],
	imports: [
		CommonModule,
		CardModule,
		InsertShadowModule,
		DumpNgIfModule,
		MatProgressSpinnerModule,
		ScrollWithLoadingModule,
		MatIconModule,
		MatButtonModule,
		PaginationModule,
		FilterByModule,
	],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
