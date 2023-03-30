import {NgModule} from '@angular/core';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
	declarations: [ProductsListComponent],
	imports: [SharedModule, CardModule],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
