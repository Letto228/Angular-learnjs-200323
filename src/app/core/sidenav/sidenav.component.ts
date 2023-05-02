import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnInit,
	ViewChild,
} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
import {CategoriesStoreService} from '../../shared/categories/categories-store.service';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit {
	@ViewChild(MatDrawer, {read: MatDrawer, static: true})
	private matDrawer!: MatDrawer;

	readonly categories$ = this.categoriesStoreService.categories$;

	constructor(
		private readonly changeDetectorRef: ChangeDetectorRef,
		private readonly categoriesStoreService: CategoriesStoreService,
	) {}

	ngOnInit() {
		this.categoriesStoreService.loadCategories();
	}

	toggleSidenavOpened() {
		this.matDrawer.toggle();
		this.changeDetectorRef.markForCheck();
	}
}
