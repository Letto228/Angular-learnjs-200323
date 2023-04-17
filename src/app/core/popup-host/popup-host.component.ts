import {
	Component,
	OnChanges,
	Input,
	TemplateRef,
	ViewChild,
	ViewContainerRef,
	SimpleChanges,
} from '@angular/core';
import {PopupHostModule} from './popup-host.module';

@Component({
	selector: 'app-popup-host',
	templateUrl: './popup-host.component.html',
	styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent {
	@Input() template: TemplateRef<unknown> | null = null;

	@ViewChild('viewport', {read: ViewContainerRef, static: true})
	private viewportViewContainer!: ViewContainerRef;

	isViewportClear = true;
	ngOnChanges({template}: SimpleChanges) {
		if (template) {
			if (template.currentValue) {
				this.viewportViewContainer.createEmbeddedView(template.currentValue);
				console.log('Открыли', this.viewportViewContainer.length);
			}
			if (!this.isViewportClear) {
				this.viewportViewContainer.clear();
				console.log('Закрыли', this.viewportViewContainer.length);
			}
			if (this.viewportViewContainer.length != 0) this.isViewportClear = false;
			else this.isViewportClear = true;
		}
	}
}
