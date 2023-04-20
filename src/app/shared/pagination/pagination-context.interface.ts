import {ThemePalette} from '@angular/material/core';

export interface IPaginationContext<T> {
	$implicit: T[];
	index: number;
	indexes: number[];
	appPaginationOf: T[];
	buttonActiveColorValue: ThemePalette;
	next: () => void;
	back: () => void;
	onPage: (index: number) => void;
}
