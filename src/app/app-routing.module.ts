import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectoryContentComponent } from './components/directory-content/directory-content.component';

const routes: Routes = [
	{
		path: '',
		component: DirectoryContentComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
