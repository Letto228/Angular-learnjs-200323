import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrolWithLoadingDirective} from './scrol-with-loading.directive';

@NgModule({
	declarations: [ScrolWithLoadingDirective],
	imports: [CommonModule],
	exports: [ScrolWithLoadingDirective],
})
export class ScrollWithLoadingModule {}
