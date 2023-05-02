import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	Input,
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
	selector: 'app-counter-input',
	templateUrl: './counter-input.component.html',
	styleUrls: ['./counter-input.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			multi: true,
			useExisting: CounterInputComponent,
		},
	],
})
export class CounterInputComponent implements ControlValueAccessor {
	@Input() step = 1;

	counter = 0;
	isDisable = false;

	private onChange!: (counter: number) => void;
	private onTouch!: () => void;

	constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

	writeValue(counter: number) {
		this.counter = counter;

		this.changeDetectorRef.markForCheck();
	}

	registerOnChange(fn: (counter: number) => void) {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => void) {
		this.onTouch = fn;
	}

	setDisabledState(isDisable: boolean) {
		this.isDisable = isDisable;

		this.changeDetectorRef.markForCheck();
	}

	back() {
		this.counter -= this.step;

		this.onChange(this.counter);
		this.onTouch();
	}

	next() {
		this.counter += this.step;

		this.onChange(this.counter);
		this.onTouch();
	}
}
