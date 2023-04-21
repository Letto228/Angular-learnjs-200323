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
import {ThemePalette} from '@angular/material/core';

@Directive({
	selector: '[appPagination]',
})
export class PaginationDirective<T> implements OnInit, OnChanges, OnDestroy {
	@Input() appPaginationOf: T[] | undefined | null;
	// Количество элементов в чанке
	@Input() appPaginationChankSize = 4;

	private readonly currentIndex$ = new BehaviorSubject<number>(0);
	private readonly destroy$ = new Subject<void>();
	private pageIndexes: number[] = [];

	constructor(
		private readonly viewContainerRef: ViewContainerRef,
		private readonly templateRef: TemplateRef<IPaginationContext<T>>,
	) {}

	ngOnChanges({appPaginationOf, appPaginationChankSize}: SimpleChanges): void {
		if (appPaginationOf) {
			this.updateView();
		}
		if (appPaginationOf || appPaginationChankSize) {
			this.updateIndexes();
		}
	}

	private updateIndexes() {
		this.pageIndexes = this.indexes;
		const currentIndex = this.currentIndex$.value;
		if (currentIndex < this.pageIndexes.length) {
			this.currentIndex$.next(currentIndex);
		} else {
			this.currentIndex$.next(0);
		}
	}

	ngOnInit(): void {
		this.listenCurrentIndexChange();
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}

	private get indexes(): number[] {
		let indexesLength = 0;
		if (this.appPaginationOf && this.appPaginationChankSize > 0) {
			indexesLength = Math.ceil(
				this.appPaginationOf.length / this.appPaginationChankSize,
			);
		}
		return Array.from({length: indexesLength}).map((_, index) => index);
	}

	private pageItems(currentIndex: number): T[] {
		return (this.appPaginationOf as T[]).slice(
			currentIndex * this.appPaginationChankSize,
			currentIndex * this.appPaginationChankSize + this.appPaginationChankSize,
		);
	}

	private updateView() {
		if (!this.appPaginationOf?.length) {
			this.viewContainerRef.clear();
			return;
		}
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
			indexes: this.pageIndexes,
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
		const newIndex = nextIndex < this.pageIndexes.length ? nextIndex : 0;
		this.currentIndex$.next(newIndex);
	}

	private back() {
		const previousIndex = this.currentIndex$.value - 1;
		const newIndex = previousIndex >= 0 ? previousIndex : this.pageIndexes.length - 1;
		this.currentIndex$.next(newIndex);
	}

	private onPage(index: number) {
		this.currentIndex$.next(index);
	}
}
