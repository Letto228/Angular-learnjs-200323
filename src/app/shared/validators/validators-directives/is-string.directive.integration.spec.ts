import {FormControl, FormsModule, NgModel} from '@angular/forms';
import {IsStringDirective} from './is-string.directive';
import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';
import {ValidatorsDirectivesModule} from './validators-directives.module';

@Component({
	selector: 'app-test',
	template: `
		<input #input appIsString [ngModel]="search" />
	`,
})
class TestComponent {
	search = '123';

	@ViewChild('input', {static: true, read: NgModel})
	ngModel!: NgModel;
}

describe('IsStringDirective', () => {
	let fixture: ComponentFixture<TestComponent>;
	let component: TestComponent;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TestComponent],
			imports: [FormsModule, ValidatorsDirectivesModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TestComponent);
		component = fixture.componentInstance;
	});

	it('Ошибка валидатора при стартовом значении - 123', fakeAsync(() => {
		fixture.detectChanges();

		tick(100);

		const errors = component.ngModel.errors;

		expect(errors).toEqual({isString: 'Is not string'});
	}));
});
