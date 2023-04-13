import {
	Directive,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	SimpleChanges,
	TemplateRef,
	ViewContainerRef,
} from '@angular/core';
import {BehaviorSubject, map, Subject, takeUntil} from 'rxjs';
import {getGroupedItems} from './get-grouped-items';
import {IPaginationContext} from './pagination-context.interface';

@Directive({
	selector: '[appPagination]',
})
export class PaginationDirective<T> implements OnInit, OnChanges, OnDestroy {
	@Input() appPaginationChankSize = 1;
	@Input() appPaginationOf: T[] | undefined | null;

	private groupedItems: Array<T[]> = [];

	private readonly currentIndex$ = new BehaviorSubject<number>(0);
	private readonly destroy$ = new Subject<void>();

	constructor(
		private readonly viewContainerRef: ViewContainerRef,
		private readonly templateRef: TemplateRef<IPaginationContext<T>>,
	) {}

	ngOnChanges({appPaginationOf, appPaginationChankSize}: SimpleChanges): void {
		if (appPaginationOf || appPaginationChankSize) {
			if (!this.appPaginationOf?.length) {
				this.viewContainerRef.clear();

				return;
			}

			this.groupedItems = getGroupedItems(
				this.appPaginationOf,
				this.appPaginationChankSize,
			);
			this.currentIndex$.next(0);
		}
	}

	ngOnInit() {
		this.listenCurrentIndexChange();
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}

	private listenCurrentIndexChange() {
		this.currentIndex$
			.pipe(
				map(index => this.getCurrentContext(index, this.groupedItems)),
				takeUntil(this.destroy$),
			)
			.subscribe(context => {
				this.viewContainerRef.clear();
				this.viewContainerRef.createEmbeddedView(this.templateRef, context);
			});
	}

	private getCurrentContext(
		activeIndex: number,
		items: Array<T[]>,
	): IPaginationContext<T> {
		return {
			$implicit: items[activeIndex],
			index: activeIndex,
			pageIndexes: items.map((_, index) => index),
			appPaginationOf: this.appPaginationOf as T[],
			next: () => {
				this.next();
			},
			back: () => {
				this.back();
			},
			selectIndex: (index: number) => {
				this.selectIndex(index);
			},
		};
	}

	private next() {
		const nextIndex = this.currentIndex$.value + 1;
		const newIndex = nextIndex < this.groupedItems.length ? nextIndex : 0;

		this.currentIndex$.next(newIndex);
	}

	private back() {
		const previousIndex = this.currentIndex$.value - 1;
		const newIndex =
			previousIndex >= 0 ? previousIndex : this.groupedItems.length - 1;

		this.currentIndex$.next(newIndex);
	}

	private selectIndex(index: number) {
		this.currentIndex$.next(index);
	}

	static ngTemplateContextGuard<T>(
		_directive: PaginationDirective<T>,
		_context: unknown,
	): _context is IPaginationContext<T> {
		return true;
	}

	static ngTemplateGuard_appPaginationOf<T>(
		_directive: PaginationDirective<T>,
		_inputValue: T[] | undefined | null,
	): _inputValue is T[] {
		return true;
	}
}
