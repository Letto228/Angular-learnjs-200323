import {borderOffset} from './border-offset.const';

export function isScrollReachedTopOffcet(
	scrollTop: number,
	prevScrollTop: number,
): boolean {
	return scrollTop < borderOffset && scrollTop < prevScrollTop;
}

export function isScrollReachedBottomOffcet(
	scrollTop: number,
	lowerScrollPosition: number,
	prevScrollTop: number,
): boolean {
	return lowerScrollPosition - scrollTop < borderOffset && scrollTop > prevScrollTop;
}
