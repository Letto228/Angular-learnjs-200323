import {
	Component,
	Input,
	OnChanges,
	SimpleChange,
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
		if (template) {
			this.changeTemplate(!this.template);
		}
	}
	changeTemplate(clear: boolean) {
		if (clear) {
			this.viewport.clear();
		} else {
			this.viewport.createEmbeddedView(this.template as TemplateRef<any>);
		}
	}
}
