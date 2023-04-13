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
import {getGroupedItems} from './get-grouped-items';

@Directive({
	selector: '[appPagination]',
})
export class PaginationDirective<T> implements OnInit, OnChanges, OnDestroy {
	@Input() appPaginationOf: T[] | undefined | null;
	// Количество элементов в чанке
	@Input() appPaginationChankSize = 4;

	private chank: Array<T[]> = [];

	private readonly currentIndex$ = new BehaviorSubject<number>(0);
	private readonly destroy$ = new Subject<void>();

	constructor(
		private readonly viewContainerRef: ViewContainerRef,
		private readonly templateRef: TemplateRef<IPaginationContext<T>>,
	) {}

	ngOnChanges({appPaginationOf}: SimpleChanges): void {
		if (appPaginationOf || this.appPaginationChankSize) {
			if (!this.appPaginationOf?.length) {
				this.viewContainerRef.clear();

				return;
			}

			this.chank = getGroupedItems(
				this.appPaginationOf,
				this.appPaginationChankSize,
			);
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
				map(index => this.getCurrentContext(index)),
				takeUntil(this.destroy$),
			)
			.subscribe(context => {
				this.viewContainerRef.clear();
				this.viewContainerRef.createEmbeddedView(this.templateRef, context);
			});
	}

	private getCurrentContext(currentIndex: number): IPaginationContext<T> | null {
		if (!this.appPaginationOf) {
			return null;
		}

		return {
			$implicit: this.appPaginationOf[currentIndex],
			index: currentIndex,
			appPaginationOf: this.appPaginationOf,
			next: () => {
				this.next();
			},
			back: () => {
				this.back();
			},
		};
	}

	private next() {
		const nextIndex = this.currentIndex$.value + 1;
		const newIndex = nextIndex < (this.appPaginationOf as T[]).length ? nextIndex : 0;

		this.currentIndex$.next(newIndex);
	}

	private back() {
		const previousIndex = this.currentIndex$.value - 1;
		const newIndex =
			previousIndex >= 0 ? previousIndex : (this.appPaginationOf as T[]).length - 1;

		this.currentIndex$.next(newIndex);
	}
}
