import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Route, Router} from '@angular/router';
import {ISubCategory} from 'src/app/shared/categories/sub-category.interface';
import {ICategory} from '../../../shared/categories/category.interface';

@Component({
	selector: 'app-categories-select',
	templateUrl: './categories-select.component.html',
	styleUrls: ['./categories-select.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesSelectComponent {
	@Input() categories!: ICategory[] | null;
	constructor(private readonly router: Router) {}

	subCategoryClick(subCat: ISubCategory['_id']) {
		this.router.navigate(['/products-list', subCat]);
		//или так
		//this.router.navigateByUrl('/products-list/'+subCat);
	}
}
