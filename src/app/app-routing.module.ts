import {NgModule, inject} from '@angular/core';
import {NoPreloading, Route, RouterModule, Routes, UrlSegment} from '@angular/router';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {NotFoundModule} from './pages/not-found/not-found.module';
import {CustomPreloadingService} from './shared/custom-preloading/custom-preloading.service';
import {PromptCanActivateGuard} from './shared/test-guard/prompt-can-activate.guard';
import {PromptCanLoadGuard} from './shared/test-guard/prompt-can-load.guard';

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
		// canLoad: [PromptCanLoadGuard],
		// canLoad: [() => window.prompt('Вы хотите загрузить данный модуль?') === 'Yes'],
		// canLoad: [( route: Route, segments: UrlSegment[]) => inject(PromptCanLoadGuard).canLoad(route, segments)],
		// canMatch: [() => window.prompt('Вы хотите загрузить данный модуль?') === 'Yes'],
		// canActivate: [PromptCanActivateGuard],
		data: {
			needPreload: true,
		},
	},
	// {
	// 	path: 'product/:productId',
	// 	component: NotFoundComponent,
	// }
	// {
	// 	path: '**',
	// 	component: NotFoundComponent,
	// },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {preloadingStrategy: NoPreloading}),
		NotFoundModule,
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
