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
import {StoreModule} from '@ngrx/store';
import {storeReducer} from './store/reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {effects} from './store/effects';

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
		StoreModule.forRoot(storeReducer),
		EffectsModule.forRoot(effects),
		StoreDevtoolsModule.instrument(),
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: BaseUrlInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
