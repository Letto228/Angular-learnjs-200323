import {TestBed} from '@angular/core/testing';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';
import {ProductsApiService} from './products-api.service';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {productsMock} from './products.mock';
import {IProductsDto} from './products.dto';

// const mockHttpClient = {
//     // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
//     get(_url: string) {},
// } as HttpClient;

describe('PopupService', () => {
	let service: ProductsApiService;
	let httpTestingController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ProductsApiService,
				// {
				//     provide: HttpClient,
				//     useValue: mockHttpClient,
				// }
			],
			imports: [HttpClientTestingModule],
		});

		service = TestBed.inject(ProductsApiService);
		httpTestingController = TestBed.inject(HttpTestingController);

		// spyOn(mockHttpClient, 'get').and.returnValue(of({data: {items: productsMock}} as IProductsDto))
	});

	it('Загрузка продуктов', done => {
		service.getProducts$().subscribe({
			next: products => {
				expect(products).toEqual(productsMock);
			},
			complete: done,
		});

		httpTestingController.expectOne('/products').flush({data: {items: productsMock}});
	});
});
