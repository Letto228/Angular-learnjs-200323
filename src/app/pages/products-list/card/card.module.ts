import {NgModule} from '@angular/core';
import {CardComponent} from './card.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
	declarations: [CardComponent],
	exports: [CardComponent],
	imports: [SharedModule],
})
export class CardModule {}
