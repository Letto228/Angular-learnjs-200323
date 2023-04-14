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
import {IPaginationContext} from './pagination-context.interface';
import {BehaviorSubject, Subject, filter, map, takeUntil} from 'rxjs';
import {getChank} from './get-grouped-items';

@Directive({
	selector: '[appPagination]',
})
export class PaginationDirective<T> implements OnInit, OnChanges, OnDestroy {
	@Input() appPaginationOf: T[] | undefined | null;
	// Количество элементов в чанке
	@Input() appPaginationChankSize = 1;

	private chank: Array<T[]> = [];

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

			this.chank = getChank(this.appPaginationOf, this.appPaginationChankSize);
			this.currentIndex$.next(0);
		}
	}

	ngOnInit(): void {
		this.listenCurrentIndexChange();
	}

	ngOnDestroy(): void {
		// this.currentIndexChangeSubscription.unsubscribe();
		this.destroy$.next();
		this.destroy$.complete();
	}

	private listenCurrentIndexChange() {
		this.currentIndex$
			.pipe(
				map(index =>
					this.getCurrentContext(
						index,
						this.chank,
						this.appPaginationChankSize,
					),
				),
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
		chankSize: number,
	): IPaginationContext<T> {
		return {
			$implicit: items[activeIndex],
			index: activeIndex,
			chankSize: chankSize,
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
		const maxindex =
			Math.round(
				(this.appPaginationOf as T[]).length / this.appPaginationChankSize,
			) - 1;
		const newIndex = nextIndex <= maxindex ? nextIndex : maxindex;
		if (this.currentIndex$.value == maxindex) {
			console.log('Последняя');
		} else this.currentIndex$.next(newIndex);
		//console.log(maxindex);
	}

	private back() {
		const previousIndex = this.currentIndex$.value - 1;
		const newIndex = previousIndex >= 0 ? previousIndex : 0;
		if (this.currentIndex$.value == 0) {
			console.log('Первая');
		} else this.currentIndex$.next(newIndex);
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
