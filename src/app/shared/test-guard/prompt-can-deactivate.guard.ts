import {Injectable} from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanDeactivate,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router';
import {Observable} from 'rxjs';
import {ProductComponent} from '../../pages/product/product.component';

@Injectable({
	providedIn: 'root',
})
export class PromptCanDeactivateGuard implements CanDeactivate<ProductComponent> {
	canDeactivate(
		_component: ProductComponent,
		_currentRoute: ActivatedRouteSnapshot,
		_currentState: RouterStateSnapshot,
		_nextState?: RouterStateSnapshot,
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		// console.log(_component);
		return window.prompt('Вы действительно хотите покинуть страницу?') === 'Yes';
	}
}
