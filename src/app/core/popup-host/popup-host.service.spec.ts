import {TestBed} from '@angular/core/testing';

import {PopupHostService} from './popup-host.service';

describe('PopupHostService', () => {
	let service: PopupHostService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(PopupHostService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
