import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DescriptionComponent} from './description/description.component';
import {TypeComponent} from './type/type.component';
import {ProductComponent} from './product.component';

const routes: Routes = [
	{
		path: '',
		component: ProductComponent,
		children: [
			{
				path: 'description',
				component: DescriptionComponent,
			},
			{
				path: 'type',
				component: TypeComponent,
			},
			{
				path: '',
				redirectTo: 'description',
				pathMatch: 'full',
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProductRoutingModule {}
