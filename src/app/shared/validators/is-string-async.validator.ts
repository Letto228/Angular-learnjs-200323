import {AbstractControl, ValidationErrors} from '@angular/forms';
import {Observable, map, timer} from 'rxjs';

// AsyncValidatorFn
export function isStringAsyncValidator(
	control: AbstractControl,
): Observable<ValidationErrors | null> {
	return timer(3000).pipe(
		map(() => (Number(control.value) ? {isString: 'Is not string'} : null)),
	);
}
