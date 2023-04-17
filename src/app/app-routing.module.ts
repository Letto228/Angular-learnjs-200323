import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsListComponent} from './pages/products-list/products-list.component';
import {ProductsListModule} from './pages/products-list/products-list.module';
import {ProductComponent} from './pages/product/product.component';
import {ProductModule} from './pages/product/product.module';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {NotFoundModule} from './pages/not-found/not-found.module';

// {host}/products-list
const routes: Routes = [
	{
		path: '',
		// component: ProductsListComponent,
		redirectTo: '/products-list',
		pathMatch: 'full',
	},
	{
		path: 'products-list',
		component: ProductsListComponent,
	},
	{
		path: 'product/id',
		component: ProductComponent,
	},
	{
		path: '**',
		component: NotFoundComponent,
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
		ProductsListModule,
		ProductModule,
		NotFoundModule,
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
