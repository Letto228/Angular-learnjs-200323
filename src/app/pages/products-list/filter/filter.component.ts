import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output,
	SimpleChanges,
} from '@angular/core';
import {IProductsFilter} from './products-filter.interface';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {map, takeUntil} from 'rxjs';
import {DestroyService} from '../../../shared/destroy/destroy.service';

@Component({
	selector: 'app-filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [DestroyService],
})
export class FilterComponent implements OnChanges, OnInit {
	@Input() brands!: string[] | null;
	@Input() initialFilter!: IProductsFilter;

	@Output() changeFilter = new EventEmitter<IProductsFilter>();
	// Output by stream
	// @Output() changeFilter!: Observable<IProductsFilter>;

	readonly filterForm = new FormGroup({
		name: new FormControl('', {validators: [Validators.minLength(3)]}),
		brands: new FormArray<FormControl<boolean>>([]),
		priceRange: new FormGroup({
			min: new FormControl(0),
			max: new FormControl(999999),
		}),
	});

	constructor(private readonly destroy$: DestroyService) {
		// Output by stream
		// this.changeFilter = this.getFilterStream$();
	}

	ngOnChanges({brands}: SimpleChanges) {
		if (brands) {
			this.initBrandsForm();
		}
	}

	ngOnInit() {
		this.initFilterValue();
		this.listenFilterChange();
	}

	private initBrandsForm() {
		const initialFilterBrands = this.initialFilter.brands;
		const brandsControls = this.brands
			? this.brands.map(
					name => new FormControl<boolean>(initialFilterBrands.includes(name)),
			  ) // eslint-disable-line no-mixed-spaces-and-tabs
			: ([] as FormControl<boolean>[]);
		const brandsForm = new FormArray(brandsControls) as FormArray<
			FormControl<boolean>
		>;

		this.filterForm.setControl('brands', brandsForm);
	}

	private initFilterValue() {
		const {name, priceRange} = this.initialFilter;

		this.filterForm.patchValue({name, priceRange});
	}

	private listenFilterChange() {
		this.filterForm.valueChanges
			.pipe(
				map(
					({brands, ...otherValues}) =>
						({
							...otherValues,
							brands: this.getBrandsListFromForm(brands as boolean[]),
						} as IProductsFilter),
				),
				takeUntil(this.destroy$),
			)
			.subscribe(filter => {
				this.changeFilter.emit(filter);
			});
	}

	// Output by stream
	// private getFilterStream$(): Observable<IProductsFilter> {
	// 	return this.filterForm.valueChanges
	// 		.pipe(
	// 			map(({ brands, ...otherValues }) => ({
	// 				...otherValues,
	// 				brands: this.getBrandsListFromForm(brands as boolean[]),
	// 			}) as IProductsFilter),
	// 		)
	// }

	private getBrandsListFromForm(brandsFormValue: boolean[]): IProductsFilter['brands'] {
		return !this.brands
			? []
			: this.brands.filter((_, index) => brandsFormValue[index]);
	}
}
