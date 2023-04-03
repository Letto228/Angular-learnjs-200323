import {
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	Component,
	DoCheck,
	EventEmitter,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	Output,
	SimpleChanges,
} from '@angular/core';
import {IApplicationConfig} from '../../shared/application-config/application-config.interface';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
// export class HeaderComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
export class HeaderComponent {
	@Input() applicationConfig: IApplicationConfig | undefined;
	@Input() applicationConfig1: IApplicationConfig | undefined;
	@Input() applicationConfig2: IApplicationConfig | undefined;
	@Input() applicationConfig3: IApplicationConfig | undefined;
	@Input() applicationConfig4: IApplicationConfig | undefined;

	@Output() menuClick = new EventEmitter<void>();

	// ngOnChanges({applicationConfig}: SimpleChanges) {
	// ngOnChanges(changes: SimpleChanges) {
	// const applicationConfig = changes['applicationConfig'];

	// console.log(changes);

	// if (applicationConfig && this.applicationConfig?.title !== applicationConfig.previousValue?.title) {
	// 	// input applicationConfig is changed
	// 	// this.applicationConfig === applicationConfig.currentValue
	// 	console.log('is title changed');
	// }
	// }

	// ngOnInit() {

	// }

	// ngDoCheck() {

	// }

	// ngAfterContentInit(): void {

	// }

	// ngAfterContentChecked(): void {

	// }

	// ngAfterViewInit(): void {

	// }

	// ngAfterViewChecked(): void {

	// }

	// ngOnDestroy(): void {

	// }
}
