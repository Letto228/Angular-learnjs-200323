import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {IDumpNgIfContext} from './dump-ng-if-context.interface';

@Directive({
	selector: '[appDumpNgIf]',
})
export class DumpNgIfDirective<T> {
	@Input() set appDumpNgIf(value: T | undefined | null) {
		const isContainerHasView = this.viewContainerRef.length;

		if (value) {
			this.viewContainerRef.clear();
			this.viewContainerRef.createEmbeddedView(this.templateRef, {
				$implicit: value,
			});

			return;
		}

		if (!value && isContainerHasView) {
			this.viewContainerRef.clear();

			return;
		}
	}

	constructor(
		private readonly viewContainerRef: ViewContainerRef,
		private readonly templateRef: TemplateRef<IDumpNgIfContext<T>>,
	) {}
}
