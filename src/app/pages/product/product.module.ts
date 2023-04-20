import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from './product.component';
import {CarouselModule} from '../../shared/carousel/carousel.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {TypeModule} from './type/type.module';
import {DescriptionModule} from './description/description.module';
import {RouterModule} from '@angular/router';
import {ProductRoutingModule} from './product-routing.module';

@NgModule({
	declarations: [ProductComponent],
	imports: [
		CommonModule,
		CarouselModule,
		MatButtonModule,
		MatIconModule,
		MatProgressSpinnerModule,
		MatTabsModule,
		TypeModule,
		DescriptionModule,
		RouterModule,
		ProductRoutingModule,
	],
	exports: [ProductComponent],
})
export class ProductModule {}
