import {NgModule} from '@angular/core';
import {NoPreloading, PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ProductsListComponent} from './pages/products-list/products-list.component';
import {ProductsListModule} from './pages/products-list/products-list.module';
import {ProductComponent} from './pages/product/product.component';
import {ProductModule} from './pages/product/product.module';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {NotFoundModule} from './pages/not-found/not-found.module';
import {DescriptionComponent} from './pages/product/description/description.component';
import {TypeComponent} from './pages/product/type/type.component';
import {CustomPreloadingService} from './shared/custom-preloading/custom-preloading.service';

// product/id

const routes: Routes = [
	{
		path: '',
		redirectTo: '/products-list',
		pathMatch: 'full',
	},
	{
		path: 'products-list',
		// component: ProductsListComponent,
		loadChildren: () =>
			import('./pages/products-list/products-list.module').then(
				m => m.ProductsListModule,
			),
		data: {
			needPreload: false,
		},
		// children: [
		// 	{
		// 		path: '',
		// 		component: ProductsListComponent,
		// 	}
		// ],
	},
	// {
	// 	path: 'product/id',
	// 	redirectTo: 'products-list',
	// 	pathMatch: 'full',
	// },
	// {
	// 	path: 'item/:id',
	// 	redirectTo: '/product/:id',
	// },
	{
		path: 'product/:productId',
		loadChildren: () =>
			import('./pages/product/product.module').then(m => m.ProductModule),
		data: {
			needPreload: true,
		},
		// component: ProductComponent,
		// children: [
		// 	{
		// 		path: 'description',
		// 		component: DescriptionComponent,
		// 	},
		// 	{
		// 		path: 'type',
		// 		component: TypeComponent,
		// 	},
		// 	{
		// 		path: '',
		// 		redirectTo: 'description',
		// 		pathMatch: 'full',
		// 	},
		// 	// {
		// 	// 	path: '**',
		// 	// 	redirectTo: 'description',
		// 	// }
		// 	// {
		// 	// 	path: '',
		// 	// 	redirectTo: '../products-list',
		// 	// 	pathMatch: 'full',
		// 	// }
		// ] as Routes
	},
	{
		path: '**',
		component: NotFoundComponent,
	},
];

// фывфывйцуфыв

// const routes: Routes = [
// 	{
// 		path: 'description',
// 		component: DescriptionComponent,
// 	},
// 	{
// 		path: 'type',
// 		component: TypeComponent,
// 	},
// 	{
// 		path: '',
// 		redirectTo: '/product/id/description',
// 		pathMatch: 'full',
// 	}
// ]

// other

// const routes: Routes = [...]

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingService}),
		// ProductsListModule,
		// ProductModule,
		NotFoundModule,
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
