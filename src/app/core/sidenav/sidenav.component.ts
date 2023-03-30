import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
	// @Input() isOpened!: boolean;

	// @Output() isOpenedChange = new EventEmitter<boolean>()

	@ViewChild('drawerComponent', {})
	private readonly drawerComponent!: MatDrawer;

	toggleSidenavOpened() {
		// this.isSidenavOpened = !this.isSidenavOpened; bad practic
		// this.isOpenedChange.emit(!this.isOpened);
		this.drawerComponent.toggle();
	}
}
