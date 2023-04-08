import {Component} from '@angular/core';
import {applicationConfigMock} from './shared/application-config/application-config.mock';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	applicationConfig = applicationConfigMock;
	applicationConfig1 = applicationConfigMock;

	isPopupOpened = true;

	constructor() {
		// setTimeout(() => {
		// 	this.applicationConfig = {
		// 		title: 'New Title',
		// 		shopIconSrc: applicationConfigMock.shopIconSrc,
		// 		headerColorPalete: applicationConfigMock.headerColorPalete,
		// 	}
		// }, 5000);
		// setTimeout(() => {
		// 	this.applicationConfig = {
		// 		title: 'New Title',
		// 		shopIconSrc: '',
		// 		headerColorPalete: applicationConfigMock.headerColorPalete,
		// 	}
		// }, 6000);

		setTimeout(() => {
			this.isPopupOpened = true;
		}, 1000);

		setTimeout(() => {
			this.isPopupOpened = false;
		}, 2000);

		setTimeout(() => {
			this.isPopupOpened = true;
		}, 3000);

		setTimeout(() => {
			this.isPopupOpened = false;
		}, 4000);
	}
}
