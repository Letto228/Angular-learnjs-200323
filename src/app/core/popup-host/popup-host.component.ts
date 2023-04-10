import {
	ChangeDetectionStrategy,
	Component,
	HostBinding,
	Input,
	OnChanges,
	SimpleChanges,
	TemplateRef,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';

@Component({
	selector: 'app-popup-host',
	templateUrl: './popup-host.component.html',
	styleUrls: ['./popup-host.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupHostComponent {
	@Input() template: TemplateRef<unknown> | null = null;

	@HostBinding('class.empty')
	get isEmpty(): boolean {
		return !this.template;
	}

	// @ViewChild('viewport', {read: ViewContainerRef, static: true})
	// private viewportViewContainer!: ViewContainerRef;

	// isViewportClear = true;

	// ngOnChanges({template}: SimpleChanges) {
	// 	if (template) {
	// 		this.updatePopupContent(this.template);
	// 	}
	// }

	// private updatePopupContent(template: TemplateRef<unknown> | null) {
	// 	if (!this.isViewportClear) {
	// 		this.viewportViewContainer.clear();
	// 	}

	// 	if (template) {
	// 		this.viewportViewContainer.createEmbeddedView(template);
	// 	}

	// 	this.isViewportClear = !this.viewportViewContainer.length;
	// }
}
