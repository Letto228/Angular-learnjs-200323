import {Directive, EventEmitter, HostListener, Output} from '@angular/core';
enum LoadDirection {
	Before = 'before',
	After = 'after',
}
@Directive({
	selector: '[appScrollWithLoading]',
})
export class ScrollWithLoadingDirective {
	@Output() loadData = new EventEmitter<LoadDirection>();
	public needscroll = 0;
	@HostListener('scroll', ['$event.target'])
	onScroll({scrollTop, clientHeight, scrollHeight}: HTMLElement) {
		//console.log('down2', scrollTop,clientHeight,scrollHeight);

		if (scrollTop <= 200) {
			//console.log('загруж вверху');
			if (this.needscroll != -1) {
				this.loadData.emit(LoadDirection.Before);
			}
			this.needscroll = -1;
		} else if (scrollHeight - scrollTop - clientHeight <= 200) {
			//console.log('загруж снизу');
			if (this.needscroll != 1) {
				this.loadData.emit(LoadDirection.After);
			}
			this.needscroll = 1;
		} else {
			this.needscroll = 0;
		}
	}
}
