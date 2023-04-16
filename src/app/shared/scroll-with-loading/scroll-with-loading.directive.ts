import {Directive, EventEmitter, HostListener, Output} from '@angular/core';
import {LoadDirection} from './load-direction.const';

const offset = 100;

@Directive({
	selector: '[appScrollWithLoading]',
})
export class ScrollWithLoadingDirective {
	@Output() loadData = new EventEmitter<LoadDirection>();

	private lastScrollTopPosition = 0;

	@HostListener('scroll', ['$event.target'])
	onScroll(element: HTMLElement) {
		const scrollTopPosition = element.scrollTop;

		const loadDirection: LoadDirection =
			scrollTopPosition > this.lastScrollTopPosition
				? LoadDirection.After
				: LoadDirection.Before;

		if (loadDirection == LoadDirection.After) {
			const currentClientScrollHeight = element.clientHeight + element.scrollTop;
			const elementHeightToScrollAfter = element.scrollHeight - offset;
			if (currentClientScrollHeight > elementHeightToScrollAfter) {
				this.loadData.emit(loadDirection);
			}
		} else {
			if (element.scrollTop < offset) {
				this.loadData.emit(loadDirection);
			}
		}
		this.lastScrollTopPosition = scrollTopPosition;
	}
}
