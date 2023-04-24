import {Injectable} from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class PromptCanActivateGuard implements CanActivate {
	constructor(private readonly router: Router) {}

	canActivate(
		_route: ActivatedRouteSnapshot,
		_state: RouterStateSnapshot,
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return (
			window.prompt('Хотите посетить данную страницу?') === 'Yes' ||
			this.router.createUrlTree(['/products-list'])
		);
	}
}
