import {
	Component,
	ViewEncapsulation,
	ElementRef,
	Input,
	OnInit,
	OnDestroy,
} from '@angular/core';

import {DialogService} from './dialog.service';

@Component({
	selector: 'app-jw-modal',
	templateUrl: 'dialog.component.html',
	styleUrls: ['dialog.component.css'],
	encapsulation: ViewEncapsulation.None,
})
export class DialogComponent implements OnInit, OnDestroy {
	@Input() id!: string;
	private element: any;

	constructor(private dialogService: DialogService, private el: ElementRef) {
		this.element = el.nativeElement;
	}

	ngOnInit(): void {
		if (!this.id) {
			return;
		}

		document.body.appendChild(this.element);

		this.element.addEventListener('click', (el: {target: {className: string}}) => {
			if (el.target.className === 'jw-modal') {
				this.close();
			}
		});

		this.dialogService.add(this);
	}
	ngOnDestroy(): void {
		this.dialogService.remove(this.id);
		this.element.remove();
	}

	open(): void {
		this.element.style.display = 'block';
		document.body.classList.add('jw-modal-open');
	}

	close(): void {
		this.element.style.display = 'none';
		document.body.classList.remove('jw-modal-open');
	}
}
