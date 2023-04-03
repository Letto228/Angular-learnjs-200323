import {
	AfterViewInit,
	Component,
	ContentChild,
	ElementRef,
	Input,
	OnChanges,
	OnInit,
	QueryList,
	SimpleChanges,
	TemplateRef,
	ViewChild,
	ViewChildren,
	ViewContainerRef,
	ViewRef,
} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatList} from '@angular/material/list';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css'],
})
// export class SidenavComponent implements OnChanges, OnInit, AfterViewInit {
export class SidenavComponent {
	// @Input() navigationTemplate: TemplateRef<any> | undefined;

	@ViewChild(MatDrawer)
	private readonly drawerComponent!: MatDrawer;

	@ViewChild(MatButton)
	private readonly matButton!: MatButton;
	@ViewChild(MatButton, {read: ElementRef, static: true})
	private readonly matButtonElementRef: ElementRef | undefined;

	@ViewChild('viewport', {read: ViewContainerRef, static: true})
	private readonly viewport!: ViewContainerRef;

	// @ViewChildren(MatButton)
	// private readonly matButtons!: QueryList<MatButton>;

	@ContentChild(MatList, {static: true, read: ElementRef})
	private readonly matList!: ElementRef;

	// ngOnChanges({navigationTemplate}: SimpleChanges): void {
	// 	if (navigationTemplate) {
	// 		this.insertNavigationTemplate();
	// 	}
	// }

	toggleSidenavOpened() {
		// console.log(this.matButtons);
		// console.log(this.matButtonElementRef);
		console.log(this.matList);
		this.drawerComponent.toggle();
	}

	// ngOnInit(): void {
	// console.log('ngOnInit', this.matButtonElementRef);
	// this.insertNavigationTemplate();
	// }

	// ngAfterViewInit(): void {
	// console.log('ngAfterViewInit', this.matButtonElementRef);
	// }

	// private insertNavigationTemplate() {
	// if (this.navigationTemplate) {
	// this.viewport.createEmbeddedView(this.navigationTemplate);
	// this.viewport.createEmbeddedView(this.navigationTemplate, {firstName: 'is 2'});
	// this.viewport.createEmbeddedView(this.navigationTemplate, {firstName: 'is 3'});

	// this.viewport.move(
	// 	this.viewport.get(2) as ViewRef,
	// 	0
	// );
	// }
	// }
}
