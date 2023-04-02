import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProductsListComponent } from './products-list.component'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { CardModule } from './card/card.module'

@NgModule({
	declarations: [ProductsListComponent],
	imports: [CommonModule, MatCardModule, MatButtonModule, CardModule],
	exports: [ProductsListComponent]
})
export class ProductsListModule {}
