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
import {IProductsFilterForm} from './products-filter-form.interface';

@Component({
	selector: 'app-filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [DestroyService],
})
export class FilterComponent {
	@Input() brands!: string[] | null;

	@Output() changeFilter = new EventEmitter<IProductsFilter>();

	// readonly filterForm = new FormGroup({
	// 	name: new FormControl('123', {validators: [Validators.minLength(3)]}),
	// 	brands: new FormArray<FormControl<boolean>>([]),
	// 	priceRange: new FormGroup({
	// 		min: new FormControl(0),
	// 		max: new FormControl(999999),
	// 	}),
	// })

	// constructor(
	// 	private readonly destroy$: DestroyService,
	// ) {}

	// ngOnChanges({brands}: SimpleChanges) {
	// 	if (brands) {
	// 		this.initBrandsForm();
	// 	}
	// }

	// ngOnInit() {
	// 	this.listenFilterChange();
	// }

	// get nameFormControl(): FormControl {
	// 	return this.filterForm.get('name') as FormControl;
	// }

	// get minFormControl(): FormControl {
	// 	return this.filterForm.get(['priceRange', 'min']) as FormControl;
	// }

	// get maxFormControl(): FormControl {
	// 	return this.filterForm.get(['priceRange', 'max']) as FormControl;
	// }

	// private initBrandsForm() {
	// 	const brandsControls = this.brands
	// 		? this.brands.map(() => new FormControl<boolean>(false))
	// 		: [] as FormControl<boolean>[];
	// 	const brandsForm = new FormArray(brandsControls) as FormArray<FormControl<boolean>>;

	// 	this.filterForm.setControl('brands', brandsForm);
	// }

	// private listenFilterChange() {
	// 	this.filterForm.valueChanges.pipe(
	// 		map(({brands, ...formValue}): IProductsFilter => ({
	// 			...formValue,
	// 			brands: this.getBrandsListFromForm(brands as boolean[]),
	// 		}) as IProductsFilter),
	// 		takeUntil(this.destroy$),
	// 	).subscribe(filter => {
	// 		this.changeFilter.emit(filter);
	// 	})
	// }

	// private getBrandsListFromForm(brandsFormValue: boolean[]): IProductsFilter['brands'] {
	// 	return !this.brands
	// 		? []
	// 		: this.brands.filter((_, index) => brandsFormValue[index]);
	// }

	onFilterSubmit({name, priceRange, brands}: IProductsFilterForm) {
		const filter: IProductsFilter = {
			name: name,
			priceRange: priceRange,
			brands: this.getBrandsListFromForm(brands),
		};

		this.changeFilter.emit(filter);
	}

	private getBrandsListFromForm(
		brandsFormValue: Record<string, boolean>,
	): IProductsFilter['brands'] {
		return !this.brands
			? []
			: this.brands.filter((_, index) => brandsFormValue[index]);
	}
}
