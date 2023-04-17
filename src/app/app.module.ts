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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BASE_URL} from './shared/base-url/base-url.token';
import {baseUrl} from './shared/base-url/base-url.const';
import {environment} from '../environments/environment';
import {BaseUrlInterceptor} from './shared/base-url/base-url.interceptor';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HeaderModule,
		SidenavModule,
		MatListModule,
		PopupHostModule,
		HttpClientModule,
	],
	providers: [
		// ...BrowserModule.providers,
		// ...HeaderModule.providers,
		// ...ProductsListModule.providers,
		// {provide: 'name', useValue: 'ProductsListModule'},
		// ...HttpClientModule.providers
		{
			provide: 'name',
			useValue: 'AppModule',
		},
		// {
		// 	provide: BASE_URL,
		// 	// useValue: environment.isProd ? baseUrl : 'error',
		// 	// useValue: window.appConfig.isProd ? baseUrl : 'error',
		// 	useValue: 'custom-urls',
		// }
		{
			provide: HTTP_INTERCEPTORS,
			useClass: BaseUrlInterceptor,
			multi: true,
		},
		// {
		// 	provide: HTTP_INTERCEPTORS,
		// 	useClass: OtherInterceptor,
		// 	multi: true,
		// },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}

// X - подключение токена 'name'

// NullInjector

// |

// PlatformInjector

// |												\

// RootInjector(AppModuleInjector)(AppFirst)		RootInjector(AppSecond)

// |												|

// AppCoponentElementingector						...

// |									\

// SidenavComponentElementInjector		HeaderComponentElementInjector

// |

// ProductsListComponentElemntInjector(?)
