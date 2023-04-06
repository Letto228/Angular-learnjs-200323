import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidenavComponent} from './sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {ProductsListModule} from '../../pages/products-list/products-list.module';

@NgModule({
	declarations: [SidenavComponent],
	exports: [SidenavComponent],
	imports: [CommonModule, MatSidenavModule, MatButtonModule, ProductsListModule],
})
export class SidenavModule {}
