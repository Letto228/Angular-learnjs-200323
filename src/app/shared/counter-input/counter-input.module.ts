import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CounterInputComponent} from './counter-input.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
	declarations: [CounterInputComponent],
	imports: [CommonModule, MatIconModule, MatButtonModule],
	exports: [CounterInputComponent],
})
export class CounterInputModule {}
