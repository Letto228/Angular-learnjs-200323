import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card.component';
import {MatCommonModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
	declarations: [CardComponent],
	imports: [CommonModule, MatCardModule, MatButtonModule, MatCommonModule],
	exports: [CardComponent],
})
export class CardModule {}
