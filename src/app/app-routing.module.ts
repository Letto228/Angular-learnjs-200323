import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {NotFoundModule} from './pages/not-found/not-found.module';
import {CustomPreloadingService} from './shared/custom-preloading/custom-preloading.service';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/products-list',
		pathMatch: 'full',
	},
	{
		path: 'products-list',
		loadChildren: () =>
			import('./pages/products-list/products-list.module').then(
				m => m.ProductsListModule,
			),
		data: {
			needPreload: false,
		},
	},
	{
		path: 'product/:productId',
		loadChildren: () =>
			import('./pages/product/product.module').then(m => m.ProductModule),
		data: {
			needPreload: true,
		},
	},
	{
		path: '**',
		component: NotFoundComponent,
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingService}),
		NotFoundModule,
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
