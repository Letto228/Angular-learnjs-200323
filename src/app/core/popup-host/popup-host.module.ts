import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PopupHostComponent} from './popup-host.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
	declarations: [PopupHostComponent],
	imports: [CommonModule, MatButtonModule, MatIconModule],
	exports: [PopupHostComponent],
})
export class PopupHostModule {}
