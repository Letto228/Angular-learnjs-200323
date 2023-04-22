import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class DialogService {
	private dialogs: any[] = [];

	add(dialog: any) {
		this.dialogs.push(dialog);
	}

	remove(id: string) {
		this.dialogs = this.dialogs.filter(x => x.id !== id);
	}

	open(id: string) {
		const dialog = this.dialogs.find(x => x.id === id);
		dialog.open();
	}

	close(id: string) {
		const dialog = this.dialogs.find(x => x.id === id);
		dialog.close();
	}
}
