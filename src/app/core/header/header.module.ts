import {NgModule} from '@angular/core';
import {HeaderComponent} from './header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
	declarations: [HeaderComponent],
	imports: [MatIconModule, MatToolbarModule, MatButtonModule],
	exports: [HeaderComponent],
})
export class HeaderModule {}
