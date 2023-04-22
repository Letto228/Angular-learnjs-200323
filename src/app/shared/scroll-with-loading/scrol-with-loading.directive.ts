import {EventEmitter} from '@angular/core';
import {Output} from '@angular/core';
import {Directive, HostListener} from '@angular/core';
import {LOAD_DIRECTION} from './load-direction.const.';

@Directive({
	selector: '[appScrolWithLoading]',
})
export class ScrolWithLoadingDirective {
	@Output()
	scrolled = new EventEmitter<LOAD_DIRECTION>();

	@HostListener('scroll', ['$event.target'])
	onScroll() {
		this.scrolled.emit(LOAD_DIRECTION.NO_DIRECTION_NEEDED);
	}
}
