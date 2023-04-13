import {
	Component,
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
})
export class PopupHostComponent implements OnChanges {
	@Input()
	template: TemplateRef<any> | null = null;

	@ViewChild('viewport', {static: true, read: ViewContainerRef})
	private readonly _viewport!: ViewContainerRef;

	isViewPortClear = true;

	ngOnChanges({template}: SimpleChanges): void {
		if (template) {
			this._updatePopupContent(this.template);
		}
	}

	private _updatePopupContent(template: TemplateRef<unknown> | null) {
		if (!this.isViewPortClear) {
			this._viewport.clear();
		}

		if (template) {
			this._viewport.createEmbeddedView(template);
		}

		this.isViewPortClear = !this._viewport.length;
	}
}
