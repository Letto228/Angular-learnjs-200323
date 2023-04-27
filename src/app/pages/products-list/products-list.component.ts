import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {IProduct} from '../../shared/products/product.interface';
import {ProductsStoreService} from '../../shared/products/products-store.service';
import {ActivatedRoute} from '@angular/router';
import {Observable, map, startWith, switchMap, tap} from 'rxjs';
import {AbstractControl, FormControl, ValidationErrors, Validators} from '@angular/forms';
import {isStringValidator} from '../../shared/validators/is-string.validator';
import {isStringAsyncValidator} from '../../shared/validators/is-string-async.validator';
import {BrandsService} from '../../shared/brands/brands.service';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
	readonly products$ = this.activatedRoute.paramMap.pipe(
		map(paramMap => paramMap.get('subCategoryId')),
		tap(subCategoryId => {
			this.productsStoreService.loadProducts(subCategoryId);
		}),
		switchMap(() => this.productsStoreService.products$),
	);
	readonly brands$ = this.activatedRoute.paramMap.pipe(
		map(paramMap => paramMap.get('subcategoryId')),
		tap(id => {
			this.brandsService.loadBrands(id);
		}),
		switchMap(() => this.brandsService.brands$),
	);

	// counter = 0;

	// readonly counterFormControl = new FormControl(0);
	// readonly counterFormControlValue$ = this.counterFormControl.valueChanges.pipe(
	// 	startWith(this.counterFormControl.value),
	// );

	readonly searchControl = new FormControl('', {
		validators: [Validators.minLength(3)],
		// asyncValidators: [this.isStringAsyncValidator.bind(this)],
		asyncValidators: [isStringAsyncValidator],
	});
	readonly searchedProductName$ = this.searchControl.valueChanges.pipe(
		startWith(this.searchControl.value),
	);
	readonly searchedProductNameErrors$ = this.searchControl.statusChanges.pipe(
		// map(status => status === 'INVALID' ? this.searchControl.errors : null),
		map(() => this.searchControl.errors),
		startWith(this.searchControl.errors),
	);

	constructor(
		private readonly productsStoreService: ProductsStoreService,
		private readonly activatedRoute: ActivatedRoute,
		private readonly brandsService: BrandsService,
	) {
		// setTimeout(() => {
		// 	this.counterFormControl.setValue(300);
		// 	// this.counterFormControl.disable();
		// 	// CounterInputComponent.writeValue(300);
		// 	this.counter = 300;
		// 	this.changeDetectorRef.markForCheck();
		// }, 1000);
	}

	trackById(_index: number, item: IProduct): IProduct['_id'] {
		return item._id;
	}

	// onCounterChange(counter: number) {
	// 	this.counter = counter;
	// 	console.log(counter);
	// }

	// private isStringAsyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
	// 	return isStringAsyncValidator(control).pipe(
	// 		tap(() => {
	// 			this.changeDetectorRef.markForCheck();
	// 		})
	// 	)
	// }
}
