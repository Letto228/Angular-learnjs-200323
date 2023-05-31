import {NgModule} from '@angular/core';
import {HeaderComponent} from './header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';

@NgModule({
	declarations: [HeaderComponent],
	imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterModule],
	exports: [HeaderComponent],
})
export class HeaderModule {}
