import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from './product.component';
import {CarouselModule} from '../../shared/carousel/carousel.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {DescriptionComponent} from './description/description.component';
import {TypeComponent} from './type/type.component';

@NgModule({
	declarations: [ProductComponent, DescriptionComponent, TypeComponent],
	imports: [
		CommonModule,
		CarouselModule,
		MatButtonModule,
		MatIconModule,
		MatProgressSpinnerModule,
		MatTabsModule,
	],
	exports: [ProductComponent],
})
export class ProductModule {}
