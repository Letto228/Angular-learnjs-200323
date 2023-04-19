import {Directive, EventEmitter, HostListener, Output} from '@angular/core';
import {LoadDirection} from './infinite-scroll.enum';
let previouScroll = 0;

@Directive({
	selector: '[appInfiniteScroll]',
})
export class InfiniteScrollDirective {
	@Output() loadData: EventEmitter<LoadDirection> = new EventEmitter<LoadDirection>();

	@HostListener('scroll', ['$event.target'])
	onScroll(target: HTMLElement) {
		const scrollTop = target.scrollTop;
		const clientHeight = target.clientHeight;
		const scrollHeight = target.scrollHeight;
		const borderBottomOffset = scrollHeight - (scrollTop + clientHeight);

		if (scrollTop >= previouScroll && borderBottomOffset < 100) {
			this.loadData.emit(LoadDirection.BOTTOM);
		} else if (scrollTop < previouScroll && scrollTop < 100) {
			this.loadData.emit(LoadDirection.TOP);
		}
		previouScroll = scrollTop;
	}
}
