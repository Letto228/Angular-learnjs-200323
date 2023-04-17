import {ChangeDetectionStrategy, Component} from '@angular/core';
import {of} from 'rxjs';
import {productsMock} from '../../shared/products/products.mock';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
	readonly product$ = of(productsMock[0]);
}
