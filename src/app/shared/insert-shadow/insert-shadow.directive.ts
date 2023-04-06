import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
	selector: '[appInsertShadow]',
})
export class InsertShadowDirective {
	// @HostListener('click', ['$event']) // <tag-element (click)="onClick($event)"></...>
	// onClick({target}: MouseEvent) {
	@HostListener('click')
	toggleShadow() {
		this.isBoxShadowActive = !this.isBoxShadowActive;
	}

	// @HostBinding('style.boxShadow') // <tag-element [style.boxShadow]="shadow"></...>
	// shadow = '';
	@HostBinding('style.boxShadow') // <tag-element [style.boxShadow]="shadow"></...>
	get boxShadow(): string {
		return this.isBoxShadowActive ? 'inset 0 0 10px #000' : '';
	}

	private isBoxShadowActive = false;

	// @HostListener('touchstart', ['$event.touches[0].clientX'])
	// @HostListener('mousedown', ['$event.clientX'])
	// onMouseDown(clientX: number) {
	//   console.log('Down', clientX);
	// }
	// @HostListener('touchstart', ['$event'])
	// @HostListener('mousedown', ['$event'])
	// onMouseDown(event: MouseEvent | TouchEvent) {
	//   if (event instanceof MouseEvent) {
	//     console.log('Down', event.clientX);

	//     return;
	//   }

	//   console.log(event.touches[0].clientX)
	// }
}
