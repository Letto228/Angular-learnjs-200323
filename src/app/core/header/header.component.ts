import {Component} from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
	onClick(event: MouseEvent) {
		event.stopPropagation();

		console.log('Click', event);
	}
}
