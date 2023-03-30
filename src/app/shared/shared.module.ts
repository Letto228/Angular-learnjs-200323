import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

const SharedModules = [MatCardModule, MatButtonModule];
@NgModule({
	declarations: [],
	imports: [CommonModule, ...SharedModules],
	exports: [...SharedModules],
})
export class SharedModule {}
