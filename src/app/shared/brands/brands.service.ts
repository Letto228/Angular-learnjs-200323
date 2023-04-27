import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {BrandsApiService} from './brands-api.service';

@Injectable({
	providedIn: 'root',
})
export class BrandsService {
	private readonly brandsStore$ = new BehaviorSubject<string[] | null>(null);

	constructor(private readonly brandsApiService: BrandsApiService) {}

	get brands$(): Observable<string[] | null> {
		return this.brandsStore$.asObservable();
	}

	loadBrands(subCategoryId?: string | null) {
		this.brandsApiService.getBrands$(subCategoryId).subscribe(brands => {
			this.brandsStore$.next(brands);
		});
	}
}
