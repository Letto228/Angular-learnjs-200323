import {Component} from '@angular/core';
import {applicationConfigMock} from './shared/application-config/application-config.mock';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	readonly applicationConfig = applicationConfigMock;

	// isSidenavOpened = false;

	// onClick() {
	// 	console.log('Click AppComponent');
	// }

	// onKeyDownEnter(event: any) {
	// 	console.log(event);

	// 	console.log('onKeyDown - Enter');
	// }

	// onMenuClick(event: string) {
	// 	this.isSidenavOpened = !this.isSidenavOpened;

	// 	console.log('menu click', event);
	// }
}
