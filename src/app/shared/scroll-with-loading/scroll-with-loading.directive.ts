import {Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Observable, fromEvent, debounceTime, Subscription} from 'rxjs';
import {LoadDirection} from '../load-direction.emum';

const ScrollDelta = 100;

@Directive({
	selector: '[appScrollWithLoading]',
})
export class ScrollWithLoadingDirective implements OnInit, OnDestroy {
  private subInstance: Subscription | undefined;
	private scrollEvent$: Observable<any>;
	private lastScrollTop: number = 0;

	@Output() loadData: EventEmitter<LoadDirection> = new EventEmitter();

	ngOnInit() {
		this.subInstance = this.scrollEvent$.subscribe(({target}: any) => {
			if (this.lastScrollTop > target.scrollTop) {
				if (target.scrollTop <= ScrollDelta) {
					this.loadData.emit(LoadDirection.Top);
				}
			} else if (this.lastScrollTop <= target.scrollTop) {
				if (
					target.scrollTop + target.clientHeight >=
					target.scrollHeight - ScrollDelta
				) {
					this.loadData.emit(LoadDirection.Bottom);
				}
			}

			this.lastScrollTop = target.scrollTop;
		});
	}

	ngOnDestroy() {
    this.subInstance?.unsubscribe();
  }

	constructor(element: ElementRef) {
		this.scrollEvent$ = fromEvent(element.nativeElement, 'scroll').pipe(debounceTime(250));
	}
}
