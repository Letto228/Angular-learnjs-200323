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
	@Input() template: TemplateRef<any> | null | undefined;

	@ViewChild('viewport', {read: ViewContainerRef, static: true})
	private readonly viewport!: ViewContainerRef;

	ngOnChanges({template}: SimpleChanges): void {
		if (template.currentValue) {
			this.insertTemplate();
		} else {
			this.viewport.clear();
		}
	}

	insertTemplate() {
		if (this.template) {
			this.viewport.createEmbeddedView(this.template);
		}
	}
}
