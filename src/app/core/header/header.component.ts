import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IApplicationConfig} from '../../shared/application-config/application-config.interface';
import {ThemePalette} from '@angular/material/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
	@Input() applicationConfig: IApplicationConfig | undefined;

	@Output() menuClick = new EventEmitter<string>();

	onClick(event: MouseEvent) {
		event.stopPropagation();

		console.log('Click', event);
	}
}
