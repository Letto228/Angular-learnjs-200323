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
	private readonly viewport!: ViewContainerRef;
	ngOnChanges({template}: SimpleChanges): void {
		if (template) {
			this.viewport.clear();
			this.viewport.createEmbeddedView(this.template as TemplateRef<any>);
		}
	}
}
