import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {CommonModule} from '@angular/common';
import {ProductsListComponent} from './products-list.component';
import {CardComponent} from './card/card.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
	declarations: [ProductsListComponent, CardComponent],
	imports: [CommonModule, MatCardModule, MatButtonModule],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
