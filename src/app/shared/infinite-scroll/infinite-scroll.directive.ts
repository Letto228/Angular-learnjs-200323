import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

export enum LoadDirection {
	TOP = 'top',
	BOTTOM = 'bottom',
}

@Directive({
	selector: '[appInfiniteScroll]',
})
export class InfiniteScrollDirective {
	@Output() loadData: EventEmitter<LoadDirection> = new EventEmitter<LoadDirection>();

	@HostListener('scroll', ['$event.target'])
	onScroll(target: HTMLElement) {
		const scrollTop = target?.scrollTop;
		const windowHeight = window.innerHeight;
		const scrollHeight = target?.scrollHeight;
		const borderBottomOffset = scrollHeight - (scrollTop + windowHeight);

		if (scrollTop < 100) {
			this.loadData.emit(LoadDirection.TOP);
		} else if (borderBottomOffset < 100) {
			this.loadData.emit(LoadDirection.BOTTOM);
		}
	}
}
