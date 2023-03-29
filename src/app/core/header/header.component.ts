import {Component, ViewEncapsulation} from '@angular/core';

@Component({
	// selector: 'article[header]',
	selector: 'app-header',
	// template: `
	// <h1>header works! In class</h1>
	// `,
	// styles: ['h1 {color: red}'],
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

		console.log('Click', event);
	}
}
