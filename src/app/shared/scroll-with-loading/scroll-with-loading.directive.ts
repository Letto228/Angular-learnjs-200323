import {Directive, EventEmitter, HostListener, Output} from '@angular/core';
import {LoadDirection} from './load-direction.enum';

const offset = 100;

@Directive({
	selector: '[appScrollWithLoading]',
})
export class ScrollWithLoadingDirective {
	@Output() loadData = new EventEmitter<LoadDirection>();

	lastScrollTop = 0;
	lastScrollHeightOnAfter = 0;
	lastScrollHeightOnBefore = 0;
	@HostListener('scroll', ['$event.target'])
	onScroll(element: HTMLElement) {
		const scrollTop = element.scrollTop;
		if (
			scrollTop > this.lastScrollTop &&
			scrollTop + element.clientHeight >= element.scrollHeight - offset &&
			element.scrollHeight !== this.lastScrollHeightOnAfter
		) {
			this.loadData.emit(LoadDirection.after);
			this.lastScrollHeightOnAfter = element.scrollHeight;
		}

		if (
			scrollTop < this.lastScrollTop &&
			scrollTop <= offset &&
			element.scrollHeight !== this.lastScrollHeightOnBefore
		) {
			this.loadData.emit(LoadDirection.before);
			this.lastScrollHeightOnBefore = element.scrollHeight;
		}
		this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
	}
}
