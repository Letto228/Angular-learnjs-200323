import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {HeaderModule} from './header.module';
import {RouterTestingModule} from '@angular/router/testing';
import {PopupService} from '../../shared/popup/popup.service';
import {By} from '@angular/platform-browser';

describe('HeaderComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HeaderModule, RouterTestingModule],
			providers: [PopupService],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;

		fixture.detectChanges();
	});

	it('Клик по меню', () => {
		const menuClickEmitSpy = spyOn(component.menuClick, 'emit');
		const trigerEvent = new Event('click');
		const debugElement = fixture.debugElement;
		const menuButtonElement = debugElement.query(
			By.css('[test-id="header-button-menu"]'),
		);

		expect(menuButtonElement).not.toBeNull();
		expect(menuClickEmitSpy).not.toHaveBeenCalled();

		menuButtonElement.triggerEventHandler('click', trigerEvent);

		expect(menuClickEmitSpy).toHaveBeenCalled();
	});
});
