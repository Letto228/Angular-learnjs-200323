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
	public currentImageIndex = 0
	public message = ''

	clickBy(event: MouseEvent, id: string) {
		event.stopPropagation()
		this.message = 'Поздравляю с покупкой!'
		setTimeout(() => {
			this.message = ''
		}, 5000)
		console.log('ID купленного товара: ', id)
	}

	chevronClick(direction: string) {
		const totalImages = this.product.images.length - 1 || 0
		switch (direction) {
			case 'right':
				this.currentImageIndex++
				this.currentImageIndex > totalImages
					? (this.currentImageIndex = 0)
					: this.currentImageIndex
				break
			case 'left':
				this.currentImageIndex--
				this.currentImageIndex < 0
					? (this.currentImageIndex = totalImages)
					: this.currentImageIndex
				break
		}
	}
}
