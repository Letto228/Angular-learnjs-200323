import {Directive, EventEmitter, HostListener, Output} from '@angular/core';
import {LoadDirection} from './load-direction.enum';

const offset = 100;

@Directive({
	selector: '[appScrollWithLoading]',
})
export class ScrollWithLoadingDirective {
	@Output() loadData = new EventEmitter<LoadDirection>();

	lastScrollTop = 0;
	lastClientHeightOnAfter = 0;
	lastClientHeightOnBefore = 0;
	@HostListener('scroll', ['$event.target'])
	onScroll(element: HTMLElement) {
		const scrollTop = element.scrollTop;
		if (
			scrollTop > this.lastScrollTop &&
			scrollTop + element.clientHeight >= element.scrollHeight - offset &&
			element.clientHeight !== this.lastClientHeightOnAfter
		) {
			this.loadData.emit(LoadDirection.after);
			this.lastClientHeightOnAfter = element.clientHeight;
		}

		if (
			scrollTop < this.lastScrollTop &&
			scrollTop <= offset &&
			element.clientHeight !== this.lastClientHeightOnBefore
		) {
			this.loadData.emit(LoadDirection.before);
			this.lastClientHeightOnBefore = element.clientHeight;
		}
		this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
	}
}
