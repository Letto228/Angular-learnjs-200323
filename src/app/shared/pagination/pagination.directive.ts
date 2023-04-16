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

@Directive({
	selector: '[appPagination]',
})
export class PaginationDirective<T> implements OnInit, OnChanges, OnDestroy {
	@Input() appPaginationOf: T[] | undefined | null;
	// Количество элементов в чанке
	@Input() appPaginationChankSize = 4;

	private readonly currentIndex$ = new BehaviorSubject<number>(0);
	private readonly destroy$ = new Subject<void>();

	constructor(
		private readonly viewContainerRef: ViewContainerRef,
		private readonly templateRef: TemplateRef<IPaginationContext<T>>,
	) {}

	ngOnChanges({appPaginationOf}: SimpleChanges): void {
		if (appPaginationOf) {
			this.updateView();
		}
	}

	ngOnInit(): void {
		this.listenCurrentIndexChange();
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}

	private get indexes() {
		const pageIndexesArray: number[] = [];
		if (this.appPaginationOf) {
			for (
				let index = 0;
				index <
				Math.ceil(this.appPaginationOf.length / this.appPaginationChankSize);
				index++
			) {
				pageIndexesArray.push(index);
			}
		}
		return pageIndexesArray;
	}

	private pageItems(currentIndex: number) {
		return this.appPaginationOf?.slice(
			currentIndex * this.appPaginationChankSize,
			currentIndex * this.appPaginationChankSize + this.appPaginationChankSize,
		) as T[];
	}

	private updateView() {
		if (!this.appPaginationOf?.length) {
			this.viewContainerRef.clear();

			return;
		}
		this.currentIndex$.next(0);
	}

	private listenCurrentIndexChange() {
		this.currentIndex$
			.pipe(
				map(currentIndex => this.getCurrentContext(currentIndex)),
				filter(Boolean),
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
			$implicit: this.pageItems(currentIndex),
			index: currentIndex,
			indexes: this.indexes,
			appPaginationOf: this.appPaginationOf,
			next: () => {
				this.next();
			},
			back: () => {
				this.back();
			},
			onPage: (index: number) => {
				this.onPage(index);
			},
		};
	}

	private next() {
		const nextIndex = this.currentIndex$.value + 1;
		const newIndex = nextIndex < this.indexes.length ? nextIndex : 0;
		this.currentIndex$.next(newIndex);
	}

	private back() {
		const previousIndex = this.currentIndex$.value - 1;
		const newIndex = previousIndex >= 0 ? previousIndex : this.indexes.length - 1;
		this.currentIndex$.next(newIndex);
	}

	private onPage(index: number) {
		this.currentIndex$.next(index);
	}
}
