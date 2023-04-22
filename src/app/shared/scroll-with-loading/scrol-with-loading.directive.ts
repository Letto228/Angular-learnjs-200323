import {EventEmitter} from '@angular/core';
import {Output} from '@angular/core';
import {Directive, HostListener} from '@angular/core';
import {LOAD_DIRECTION} from './load-direction.const.';
import {BORDER_OFFSET} from './border-offset.const';

@Directive({
	selector: '[appScrolWithLoading]',
})
export class ScrolWithLoadingDirective {
	private lastScrollTop = 0;

	@Output()
	loadData = new EventEmitter<LOAD_DIRECTION>();

	@HostListener('scroll', ['$event.target'])
	onScroll({scrollTop, clientHeight, scrollHeight}: HTMLElement) {
		const lastScrollTop = this.lastScrollTop;
		this.lastScrollTop = scrollTop;

		const lowerScrollPosition = scrollHeight - clientHeight;

		if (
			scrollTop > lastScrollTop &&
			lowerScrollPosition - scrollTop < BORDER_OFFSET.BORDER_OFFSET
		) {
			this.loadData.emit(LOAD_DIRECTION.DOWN);
		} else if (scrollTop < lastScrollTop && scrollTop < BORDER_OFFSET.BORDER_OFFSET) {
			this.loadData.emit(LOAD_DIRECTION.UP);
		}
	}
}
