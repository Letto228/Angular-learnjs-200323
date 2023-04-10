import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnInit,
} from '@angular/core';
import {IProduct} from '../../shared/products/product.interface';
import {productsMock} from '../../shared/products/products.mock';
import {LoadDirection} from '../../shared/scroll-with-loading/load-direction.const';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
	products: IProduct[] | undefined = undefined;

	constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

	ngOnInit() {
		setTimeout(() => {
			this.products = productsMock;
			this.changeDetectorRef.markForCheck();
		}, 3000);

		setTimeout(() => {
			this.products = productsMock.map(item => ({...item, rating: 5}));
			this.changeDetectorRef.markForCheck();
		}, 6000);
	}

	onLoad(event: LoadDirection) {
		console.log(`load ${event}`);
	}

	onBuy(id: IProduct['_id']) {
		console.log(`Buy product ${id}`);
	}

	trackById(_index: number, item: IProduct): IProduct['_id'] {
		return item._id;
		//   return item;
	}
	// trackById(index, prevValue) === trackById(index, newValue)
}
