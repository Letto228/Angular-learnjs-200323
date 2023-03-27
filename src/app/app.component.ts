import {Component, ViewEncapsulation} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
	title = 'Angular-learnjs-200323';

	onClick() {
		console.log('Click AppComponent');
	}

	onKeyDownEnter(event: any) {
		console.log(event);

		console.log('onKeyDown - Enter');
	}
}
