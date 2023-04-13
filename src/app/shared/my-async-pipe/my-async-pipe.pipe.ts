import {ChangeDetectorRef, Pipe, PipeTransform} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

@Pipe({
	name: 'myAsyncPipe',
	pure: false,
})
export class MyAsyncPipePipe<T> implements PipeTransform {
	private value: T | null = null;
	private subscription: Subscription | null = null;

	constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

	transform(stream$: Observable<T>): T | null {
		if (!this.subscription) {
			this.subscription = stream$.subscribe(acceptedValue => {
				this.value = acceptedValue;
				this.changeDetectorRef.markForCheck();
			});
		}

		return this.value;
	}
}
