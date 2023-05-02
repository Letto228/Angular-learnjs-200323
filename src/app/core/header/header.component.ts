import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	EventEmitter,
	Input,
	Output,
	TemplateRef,
} from '@angular/core';
import {IApplicationConfig} from '../../shared/application-config/application-config.interface';
import {PopupService} from '../../shared/popup/popup.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	@Input() applicationConfig: IApplicationConfig | undefined;

	@Output() menuClick = new EventEmitter<void>();

	constructor(
		private readonly popupService: PopupService,
		private readonly changeDetectorRef: ChangeDetectorRef,
	) {}

	openPopup(template: TemplateRef<{$implicit: string}>) {
		this.popupService.openPopup({
			template,
			context: {$implicit: this.applicationConfig?.title},
		});
	}

	closePopup() {
		this.popupService.closePopup();
	}
}
