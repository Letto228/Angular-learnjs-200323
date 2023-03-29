import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderModule} from './core/header/header.module';
import {ProductsListModule} from './pages/products-list/products-list.module';

// Components/Direcives
// Pipe

// Service

// declarations ~ let/const
// exports ~ module.exports = {...}
// imports ~ import {...} from '...'

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HeaderModule,
		ProductsListModule,
	],
	// providers: [],
	exports: [AppComponent],
	bootstrap: [AppComponent],
})
export class AppModule {}
