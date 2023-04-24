import {TemplateRef} from '@angular/core';

export interface IPopupContent<T extends Object> {
	template: TemplateRef<T>;
	context: T;
}
