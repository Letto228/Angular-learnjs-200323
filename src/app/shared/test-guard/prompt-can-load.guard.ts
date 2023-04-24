import {Injectable} from '@angular/core';
import {CanLoad, Route, UrlSegment, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class PromptCanLoadGuard implements CanLoad {
	canLoad(
		_route: Route,
		_segments: UrlSegment[],
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		console.log(_route, _segments);
		return window.prompt('Вы хотите загрузить данный модуль?') === 'Yes';
	}
}
