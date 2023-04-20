import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TypeComponent} from './type.component';
import {RouterModule} from '@angular/router';

@NgModule({
	declarations: [TypeComponent],
	imports: [CommonModule, RouterModule],
	exports: [TypeComponent],
})
export class TypeModule {}
