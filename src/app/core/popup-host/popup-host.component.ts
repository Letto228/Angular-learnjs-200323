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
	@Input() template: TemplateRef<any> | null = null;

	@ViewChild('viewport', {static: true, read: ViewContainerRef})
	private readonly viewport!: ViewContainerRef;
	// Не пойму эту связку, как они связываются по имени, нет же??? Или это вообще не связка???

	ngOnChanges({template}: SimpleChanges): void {
		if (template) {
			this.onChangePopupContent();
		}
	}

	private onChangePopupContent() {
		if (this.template) {
			this.viewport.clear();
			this.viewport.createEmbeddedView(this.template);
		}
	}
}
