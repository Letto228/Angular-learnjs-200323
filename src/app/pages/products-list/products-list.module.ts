import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsListComponent} from './products-list.component';
import {CardComponent} from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
	declarations: [ProductsListComponent, CardComponent],
	imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
