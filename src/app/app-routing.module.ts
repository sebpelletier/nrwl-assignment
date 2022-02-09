import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailWrapperComponent } from './detail-wrapper/detail-wrapper.component';
import { ListWrapperComponent } from './list-wrapper/list-wrapper.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListWrapperComponent },
  { path: 'detail/:id', component: DetailWrapperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
