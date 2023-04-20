import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {filter, map, of, switchMap, tap} from 'rxjs';
import {productsMock} from '../../shared/products/products.mock';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsStoreService} from '../../shared/products/products-store.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
	// readonly product$ = of(productsMock[0]);
	readonly product$ = this.activatedRoute.paramMap.pipe(
		map(paramsMap => paramsMap.get('productId')),
		filter(Boolean),
		tap(productId => {
			this.productsStoreService.loadProduct(productId);
		}),
		switchMap(() => this.productsStoreService.currentProduct$),
	);

	constructor(
		// private readonly router: Router,
		private readonly activatedRoute: ActivatedRoute,
		private readonly productsStoreService: ProductsStoreService,
	) {}

	// ngOnInit() {
	// console.log(this.activatedRoute.snapshot.params);

	// const productId = this.activatedRoute.snapshot.paramMap.get('productId') as string;

	// this.productsStoreService.loadProduct(productId);

	// setTimeout(() => {
	// 	this.router.navigate(['/product', 'plenka-lamirel-la-78657'])
	// }, 3000)
	// }

	onDescriptonNavigate() {
		// console.log(this.activatedRoute.snapshot);
		// this.router.navigate(['./description'], {relativeTo: this.activatedRoute});
		// const urlTree = this.router.createUrlTree(
		// 	['./description'],
		// 	{relativeTo: this.activatedRoute},
		// );
		// console.log(urlTree.toString());
		// this.router.navigateByUrl(urlTree);
	}
}
