import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyAsyncPipePipe} from './my-async-pipe.pipe';

@NgModule({
	declarations: [MyAsyncPipePipe],
	imports: [CommonModule],
	exports: [MyAsyncPipePipe],
})
export class MyAsyncPipeModule {}
