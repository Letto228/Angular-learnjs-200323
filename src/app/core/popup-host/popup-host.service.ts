import {Injectable, TemplateRef} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class PopupHostService {
	private readonly popupTemplateRef$ = new BehaviorSubject<TemplateRef<unknown> | null>(
		null,
	);

	get popupTemplate$(): Observable<TemplateRef<unknown> | null> {
		return this.popupTemplateRef$.asObservable();
	}

	setPopupTemplate(popupTemplate: TemplateRef<unknown>) {
		this.popupTemplateRef$.next(popupTemplate);
	}

	clearPopup() {
		this.popupTemplateRef$.next(null);
	}
}
