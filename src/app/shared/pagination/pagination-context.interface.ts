export interface IPaginationContext<T> {
	$implicit: T[];
	index: number;
	indexes: number[];
	appPaginationOf: T[];
	next: () => void;
	back: () => void;
	onPage: (index: number) => void;
}
