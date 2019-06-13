import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'fruits-list',
    pathMatch: 'full'
  },
  {
    path: 'fruits-list',
    loadChildren: './fruits-list/fruits-list.module#FruitsListPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
