import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	HostBinding,
	TemplateRef,
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
	template$: Observable<TemplateRef<unknown> | null> =
		this.popupHostService.popupTemplate$.pipe(
			tap(value => {
				this.changeDetectorRef.markForCheck();
				this.isEmpty = !value;
			}),
		);
	constructor(
		private popupHostService: PopupHostService,
		private readonly changeDetectorRef: ChangeDetectorRef,
	) {}

	close() {
		this.popupHostService.clearPopupTemplate();
	}
}
