export interface IPaginationContext<T> {
	$implicit: T[];
	index: number;
	chankSize: number;
	next: () => void;
	back: () => void;
	selectIndex: (index: number) => void;
}
