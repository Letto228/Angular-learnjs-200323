import {Injectable} from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivateChild,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class PromptCanActivateChildGuard implements CanActivateChild {
	canActivateChild(
		_childRoute: ActivatedRouteSnapshot,
		_state: RouterStateSnapshot,
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return window.prompt('Хотите перейти по дочернему пути?') === 'Yes';
	}
}
