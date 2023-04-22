import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderModule} from './core/header/header.module';
import {SidenavModule} from './core/sidenav/sidenav.module';
import {MatListModule} from '@angular/material/list';
import {PopupHostModule} from './core/popup-host/popup-host.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BaseUrlInterceptor} from './shared/base-url/base-url.interceptor';
import {DialogModule} from './shared/dialog/dialog.module';

@NgModule({
	declarations: [AppComponent],
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
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HeaderModule,
		SidenavModule,
		MatListModule,
		PopupHostModule,
		HttpClientModule,
		DialogModule,
	],
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
