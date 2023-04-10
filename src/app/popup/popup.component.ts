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
	templateUrl: './popup.component.html',
	styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnChanges {
	@Input() popupTemplate: TemplateRef<any> | null = null;
	isViewporHidden = true;

	@ViewChild('viewport', {read: ViewContainerRef, static: true})
	private readonly viewport!: ViewContainerRef;

	ngOnChanges({popupTemplate}: SimpleChanges): void {
		if (popupTemplate) {
			this.changePopupVisibility();
		}
	}

	private changePopupVisibility(): void {
		this.viewport.clear();

		if (this.popupTemplate) {
			this.viewport.createEmbeddedView(this.popupTemplate);
			this.isViewporHidden = false;
		} else {
			this.isViewporHidden = true;
		}
	}
}
