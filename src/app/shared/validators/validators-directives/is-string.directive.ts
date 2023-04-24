import {Directive} from '@angular/core';
import {
	AbstractControl,
	NG_VALIDATORS,
	ValidationErrors,
	Validator,
} from '@angular/forms';
import {isStringValidator} from '../is-string.validator';

@Directive({
	selector: '[appIsString]',
	providers: [
		{
			provide: NG_VALIDATORS,
			multi: true,
			useExisting: IsStringDirective,
		},
	],
})
export class IsStringDirective implements Validator {
	validate(control: AbstractControl): ValidationErrors | null {
		return isStringValidator(control);
	}
}
