import {
	ChangeDetectionStrategy,
	Component,
	HostBinding,
	Input,
	OnChanges,
	SimpleChanges,
	TemplateRef,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';
import {PopupHostService} from './popup-host.service';
import {Observable, tap} from 'rxjs';

@Component({
	selector: 'app-popup-host',
	templateUrl: './popup-host.component.html',
	styleUrls: ['./popup-host.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupHostComponent {
	@HostBinding('class.empty')
	isEmpty = true;

	constructor(private readonly popupHostService: PopupHostService) {}

	template$: Observable<TemplateRef<unknown> | null> =
		this.popupHostService.popupTemplate$.pipe(
			tap(value => {
				this.isEmpty = !value;
			}),
		);

	close() {
		console.log('close popup');
		this.popupHostService.clearPopup();
	}
}
