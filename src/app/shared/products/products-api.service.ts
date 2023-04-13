import {map, Observable, of} from 'rxjs';
import {IProduct} from './product.interface';
import {productsMock} from './products.mock';
import {Injectable} from '@angular/core';

@Injectable()
export class ProductsApiService {
	getProducts$(): Observable<IProduct[]> {
		return of({data: {items: productsMock}}).pipe(map(({data}) => data.items));
	}
}
