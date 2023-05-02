import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterComponent} from './filter.component';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {CounterInputModule} from '../../../shared/counter-input/counter-input.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
	declarations: [FilterComponent],
	imports: [
		CommonModule,
		MatInputModule,
		MatCheckboxModule,
		MatProgressSpinnerModule,
		CounterInputModule,
		ReactiveFormsModule,
	],
	exports: [FilterComponent],
})
export class FilterModule {}
