import { Component } from '@angular/core'
import { IProduct } from 'src/app/shared/products/product.interface'
import { productMock } from 'src/app/shared/products/product.mock'

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css']
})
export class CardComponent {
	public product: IProduct = productMock
	public message = ''

	clickBy(event: MouseEvent, id: string) {
		event.stopPropagation()
		this.message = 'Поздравляю с покупкой!'
		setTimeout(() => {
			this.message = ''
		}, 5000)
		console.log('ID купленного товара: ', id)
	}
}
