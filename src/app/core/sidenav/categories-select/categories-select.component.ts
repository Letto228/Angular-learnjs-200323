import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnChanges,
	OnInit,
} from '@angular/core';
import {ICategory} from '../../../shared/categories/category.interface';

@Component({
	selector: 'app-categories-select',
	templateUrl: './categories-select.component.html',
	styleUrls: ['./categories-select.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesSelectComponent implements OnChanges {
	@Input() categories!: ICategory[] | null;

	ngOnChanges(): void {
		console.log('categories: ', this.categories);
	}
}
