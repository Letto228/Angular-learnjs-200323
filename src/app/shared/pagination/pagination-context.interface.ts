export interface IPaginationContext<T> {
	$implicit: T[];
	index: number;
	appPaginationOf: T[];
	next: () => void;
	back: () => void;
  page: (index: number) => void;
  pages: number[];
}
