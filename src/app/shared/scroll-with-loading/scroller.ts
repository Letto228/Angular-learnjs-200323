import {borderOffset} from './load-direction.const';

export function needScrollToTop(scrollTop: number, prevScroll: number): boolean {
	//console.log(scrollTop,borderOffset);
	return scrollTop < borderOffset && scrollTop < prevScroll;
}

export function needScrollToBottom(
	scrollTop: number,
	lowerScrollPosition: number,
	prevScroll: number,
): boolean {
	return lowerScrollPosition - scrollTop < borderOffset && scrollTop > prevScroll;
}
