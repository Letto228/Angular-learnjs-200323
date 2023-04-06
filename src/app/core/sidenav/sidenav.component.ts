import {
	AfterContentInit,
	Component,
	ContentChild,
	ContentChildren,
	OnInit,
	QueryList,
	ViewChild,
} from '@angular/core';
import {MatListItem} from '@angular/material/list';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit, AfterContentInit {
	@ViewChild(MatDrawer)
	private readonly drawerComponent!: MatDrawer;
	// @ContentChild(MatListItem)
	// private readonly matListItem!: MatListItem;
	@ContentChildren(MatListItem, {descendants: true})
	private readonly matListItem!: QueryList<MatListItem>;

	ngOnInit() {
		console.log(this.matListItem);
	}

	ngAfterContentInit(): void {
		console.log(Array.from(this.matListItem));
	}

	toggleSidenavOpened() {
		this.drawerComponent.toggle();
	}
}
