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

	ngOnChanges({template}: SimpleChanges): void {
		if (template) {
			// Егор, поясните, пожалуйста, нужно ли передавать глобальную переменную, зачем/для чего?
			this.onChangePopupContent(); // this.onChangePopupContent(this.template)
		}
	}

	private onChangePopupContent() {
		// private onChangePopupContent(template: TemplateRef<any>) | null

		if (this.viewport.length) {
			this.viewport.clear();
		}

		if (this.template) {
			// template
			this.viewport.createEmbeddedView(this.template); // template
		}
	}
}
