import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
	selector: 'app-counter-input',
	templateUrl: './counter-input.component.html',
	styleUrls: ['./counter-input.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterInputComponent {
	@Input() step = 1;

	counter = 0;

	back() {
		this.counter -= this.step;
	}

	next() {
		this.counter += this.step;
	}
}
