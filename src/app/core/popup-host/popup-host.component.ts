import {
	Component,
	Input,
	TemplateRef,
	ViewChild,
	ViewContainerRef,
	OnChanges,
	SimpleChanges,
} from '@angular/core';

@Component({
	selector: 'app-popup-host',
	templateUrl: './popup-host.component.html',
	styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent implements OnChanges {
	@Input() template: TemplateRef<unknown> | null = null;

	@ViewChild('viewport', {read: ViewContainerRef, static: true})
	private viewportViewContainer!: ViewContainerRef;

	isViewportClear = true;

	ngOnChanges({template}: SimpleChanges) {
		if (template) {
			this.updatePopupContent(this.template);
		}
	}

	private updatePopupContent(template: TemplateRef<unknown> | null) {
		if (!this.isViewportClear) {
			this.viewportViewContainer.clear();
		}

		if (template) {
			this.viewportViewContainer.createEmbeddedView(template);
		}

		this.isViewportClear = !this.viewportViewContainer.length;
	}
}
