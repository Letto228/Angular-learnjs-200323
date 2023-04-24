import {AbstractControl, ValidationErrors} from '@angular/forms';

// ValidatorFn
export function isStringValidator(control: AbstractControl): ValidationErrors | null {
	return Number(control.value) ? {isString: 'Is not string'} : null;
}
