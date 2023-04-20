import {Directive, EventEmitter, HostListener, Output} from '@angular/core';
import {borderOffset, LoadDirection} from './load-direction.const';
import {needScrollToTop, needScrollToBottom} from './scroller';

@Directive({
	selector: '[appScrollWithLoading]',
})
export class ScrollWithLoadingDirective {
	@Output() loadData = new EventEmitter<LoadDirection>();
	private prevScroll = -1;
	@HostListener('scroll', ['$event.target'])
	onScroll({scrollTop, clientHeight, scrollHeight}: HTMLElement) {
		//console.log('down2', scrollTop,clientHeight,scrollHeight);
		const prevScroll = this.prevScroll;
		this.prevScroll = scrollTop;

		const shouldLoadCardUp = needScrollToTop(scrollTop, prevScroll);
		if (shouldLoadCardUp) {
			this.loadData.emit(LoadDirection.Before);
		}

		const lowerScrollPosition = scrollHeight - clientHeight;
		const shouldLoadCardDown = needScrollToBottom(
			scrollTop,
			lowerScrollPosition,
			prevScroll,
		);

		if (shouldLoadCardDown) {
			this.loadData.emit(LoadDirection.After);
		}
	}
}
