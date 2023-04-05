import {
	Component,
	Input,
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
export class PopupHostComponent {
	@Input() template: TemplateRef<unknown> | null = null;

	@ViewChild('viewport', {read: ViewContainerRef, static: true})
	private viewPortContainer!: ViewContainerRef;

	isHidden: Boolean = true;

	ngOnChanges({template}: SimpleChanges) {
		this.isHidden = !template.currentValue;

		if (this.isHidden) {
			this.viewPortContainer.clear();
		}

		if (this.template) {
			this.viewPortContainer.createEmbeddedView(this.template);
		}
	}
}
