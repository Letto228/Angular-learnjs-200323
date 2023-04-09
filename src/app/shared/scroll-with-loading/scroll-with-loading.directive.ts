import {Directive, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable, fromEvent, debounceTime} from 'rxjs';

export enum LoadDorection {
	Top = 'Top',
	Bottom = 'Bottom',
}

const ScrollDelta = 100;

@Directive({
	selector: '[appScrollWithLoading]',
})
export class ScrollWithLoadingDirective implements OnInit {
	private root: any;
	private scrollEvent: Observable<any>;
	private lastScrollTop: number = 0;

	@Output() loadData: EventEmitter<any> = new EventEmitter();

	ngOnInit() {
		this.scrollEvent.subscribe(({target}: any) => {
			if (this.lastScrollTop > target.scrollTop) {
				if (target.scrollTop <= ScrollDelta) {
					this.loadData.emit(LoadDorection.Top);
				}
			} else if (this.lastScrollTop <= target.scrollTop) {
				if (
					target.scrollTop + target.offsetHeight >=
					target.scrollHeight - ScrollDelta
				) {
					this.loadData.emit(LoadDorection.Bottom);
				}
			}

			this.lastScrollTop = target.scrollTop <= 0 ? 0 : target.scrollTop;
		});
	}

	constructor(element: ElementRef) {
		this.root = element.nativeElement;
		this.scrollEvent = fromEvent(this.root, 'scroll').pipe(debounceTime(250));
	}
}
