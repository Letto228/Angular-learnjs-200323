import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {CarouselModule} from '../../../shared/carousel/carousel.module';

@NgModule({
	declarations: [CardComponent],
	imports: [
		CommonModule,
		MatCardModule,
		MatButtonModule,
		MatIconModule,
		CarouselModule,
	],
	exports: [CardComponent],
})
export class CardModule {}
