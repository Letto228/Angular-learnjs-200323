import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderModule} from './core/header/header.module';
import {ProductsListModule} from './pages/products-list/products-list.module';
import {SidenavModule} from './core/sidenav/sidenav.module';
import {MatListModule} from '@angular/material/list';
import {PopupHostModule} from './core/popup-host/popup-host.module';
import {ProductsStoreService} from './shared/products/products-store.service';
import {ProductsApiService} from './shared/products/products-api.service';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HeaderModule,
		ProductsListModule,
		SidenavModule,
		MatListModule,
		PopupHostModule,
	],
	providers: [
		// {
		// 	provide: ProductsStoreService, // token
		// 	useClass: ProductsStoreService, // new ProductsStoreService()
		// },
		ProductsApiService,
		ProductsStoreService,
		// {
		// 	provide: 'value',
		// 	useValue: 'is value',
		// },
		// {
		// 	provide: 'service',
		// 	useExisting: 'value',
		// },
		// {
		// 	provide: 'service',
		// 	useFactory: (productsStoreService: ProductsStoreService) => productsStoreService,
		// 	deps: [ProductsStoreService],
		// 	multi: true,
		// },
		{
			provide: 'service',
			useFactory: (productsApiService: ProductsApiService) =>
				new ProductsStoreService(productsApiService),
			deps: [ProductsApiService],
		},
		// {
		// 	provide: 'service',
		// 	useFactory: () => 'service',
		// 	multi: true,
		// }
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
