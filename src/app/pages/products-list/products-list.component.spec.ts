import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {ProductsListComponent} from './products-list.component';
import {ProductsListModule} from './products-list.module';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {BrandsService} from '../../shared/brands/brands.service';
import {of, take} from 'rxjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {loadProducts} from '../../store/products/products.actions';
import {productsSelector} from '../../store/products/products.selector';
import {productsMock} from '../../shared/products/products.mock';
import {MemoizedSelector} from '@ngrx/store';
import {IState} from '../../store/reducer';
import {IProduct} from '../../shared/products/product.interface';

describe('ProductsListComponent', () => {
	let component: ProductsListComponent;
	let fixture: ComponentFixture<ProductsListComponent>;
	let mockStore: MockStore;
	let dispatchSpy: jasmine.Spy;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProductsListModule, RouterTestingModule, BrowserAnimationsModule],
			providers: [
				provideMockStore(),
				{
					provide: BrandsService,
					useValue: {
						brands$: of([]),
						// eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
						loadBrands(_subVategoryId?: string | null) {},
					},
				},
			],
		}).compileComponents();
	});

	beforeEach(() => {
		mockStore = TestBed.inject(MockStore);

		dispatchSpy = spyOn(mockStore, 'dispatch');

		mockStore.overrideSelector(
			productsSelector as MemoizedSelector<IState, IProduct[]>,
			productsMock,
		);

		fixture = TestBed.createComponent(ProductsListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('Загрузка продуктов', done => {
		expect(dispatchSpy).toHaveBeenCalledWith(loadProducts(null));

		component.products$.pipe(take(1)).subscribe({
			next: products => {
				expect(products).toEqual(productsMock);
			},
			complete: () => {
				done();
			},
		});
	});
});
