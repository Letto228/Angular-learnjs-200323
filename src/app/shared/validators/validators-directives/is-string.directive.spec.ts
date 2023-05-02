import {FormControl} from '@angular/forms';
import {IsStringDirective} from './is-string.directive';

describe('IsStringDirective', () => {
	// it('should create an instance', () => {
	// 	const directive = new IsStringDirective();
	// 	expect(directive).toBeTruthy();
	// });

	const directive = new IsStringDirective();

	it('Форма без числа', () => {
		const error = directive.validate(new FormControl('String 1'));

		expect(error).toBeNull();
	});

	it('Форма с числом', () => {
		const error = directive.validate(new FormControl('123'));

		expect(error).toEqual({isString: 'Is not string'});
	});
});
