import {ChangeDetectionStrategy, Component} from '@angular/core';
import {applicationConfigMock} from './shared/application-config/application-config.mock';
import {DialogService} from './shared/dialog/dialog.service';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		// {
		// 	provide: 'name',
		// 	useValue: 'AppComponent',
		// }
	],
})
export class AppComponent {
	constructor(private dialogService: DialogService) {}
	readonly applicationConfig = applicationConfigMock;

	openModal(id: string) {
		this.dialogService.open(id);
	}

	closeModal(id: string) {
		this.dialogService.close(id);
	}
}
