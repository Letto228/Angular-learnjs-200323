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
		{
			provide: 'name',
			useValue: 'AppModule',
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: BaseUrlInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}

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
