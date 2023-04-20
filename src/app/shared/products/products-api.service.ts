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
	constructor(private readonly httpClient: HttpClient) {}

	getProducts$(): Observable<IProduct[]> {
		return this.httpClient
			.get<IProductsDto>(`/products/suggestion`)
			.pipe(map(({data}) => data.items));
	}

	getProduct$(id: string): Observable<IProduct | undefined> {
		return this.httpClient
			.get<{data: IProduct}>(`/products/${id}`)
			.pipe(map(({data}) => data));
	}
}
