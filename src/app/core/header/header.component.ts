import {Component, ViewEncapsulation} from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	encapsulation: ViewEncapsulation.Emulated,
})
export class HeaderComponent {
	title = 'Angular-learnjs-200323';
	iconSrc = '../../../favicon.ico';
	window = window;

	onClick(event: MouseEvent) {
		event.stopPropagation();
		console.log('click', event);
	}
}
