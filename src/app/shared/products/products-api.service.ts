import {map, Observable, of} from 'rxjs';
import {IProduct} from './product.interface';
import {productsMock} from './products.mock';
import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IProductsDto} from './products.dto';
import {BASE_URL} from '../base-url/base-url.token';

@Injectable({
	providedIn: 'root',
})
export class ProductsApiService {
	constructor(
		private readonly httpClient: HttpClient,
	) // @Inject(BASE_URL) private readonly baseUrl: string,
	{}

	getProducts$(): Observable<IProduct[]> {
		return this.httpClient
			.get<IProductsDto>(`/products/suggestion`)
			.pipe(map(({data}) => data.items));
		// return of({data: {items: productsMock}}).pipe(map(({data}) => data.items));
	}
}
