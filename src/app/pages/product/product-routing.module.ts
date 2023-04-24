import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DescriptionComponent} from './description/description.component';
import {TypeComponent} from './type/type.component';
import {ProductComponent} from './product.component';
import {PromptCanActivateGuard} from '../../shared/test-guard/prompt-can-activate.guard';
import {PromptCanActivateChildGuard} from '../../shared/test-guard/prompt-can-activate-child.guard';
import {PromptCanDeactivateGuard} from '../../shared/test-guard/prompt-can-deactivate.guard';
import {PromptCanLoadGuard} from '../../shared/test-guard/prompt-can-load.guard';

const routes: Routes = [
	{
		path: '',
		component: ProductComponent,
		canActivate: [PromptCanActivateGuard],
		// canActivateChild: [PromptCanActivateChildGuard],
		// canDeactivate: [PromptCanDeactivateGuard],
		// canLoad: [PromptCanLoadGuard],
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
				component: DescriptionComponent,
			},
			// {
			// 	path: '',
			// 	redirectTo: 'description',
			// 	pathMatch: 'full',
			// },
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProductRoutingModule {}
