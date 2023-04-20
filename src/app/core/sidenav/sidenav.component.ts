import {
	AfterViewChecked,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ViewChild,
} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
	@ViewChild(MatDrawer)
	private readonly drawerComponent!: MatDrawer;

	constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

	toggleSidenavOpened() {
		this.drawerComponent.toggle();
		this.changeDetectorRef.markForCheck();
	}
}
