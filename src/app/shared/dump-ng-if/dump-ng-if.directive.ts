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
				appDumpNgIf: value,
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

	static ngTemplateContextGuard<T>(
		_directive: DumpNgIfDirective<T>,
		_context: unknown,
	): _context is IDumpNgIfContext<T> {
		return true;
	}

	static ngTemplateGuard_appDumpNgIf<T>(
		_directive: DumpNgIfDirective<T>,
		_inputValue: T | undefined | null,
	): _inputValue is T {
		return true;
	}
}
