import {Injectable} from '@angular/core';
import {PreloadingStrategy, Route} from '@angular/router';
import {Observable, of} from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class CustomPreloadingService implements PreloadingStrategy {
	preload({data, path}: Route, load: () => Observable<unknown>): Observable<unknown> {
		const needPreloadThisRoute = data?.['needPreload'];

		if (needPreloadThisRoute) {
			// console.log('Preload', path);

			return load();
		}

		// console.log('No preload', path);

		return of(null);
	}
}
