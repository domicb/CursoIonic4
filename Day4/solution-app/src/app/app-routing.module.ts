import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'sandbox',
    loadChildren: './pages/sandbox/sandbox.module#SandboxPageModule'
  },
  {
    path: 'fruits-list',
    loadChildren: './pages/fruits-list/fruits-list.module#FruitsListPageModule'
  },
  {
    path: 'fruit-details/:id',
    loadChildren: './pages/fruit-details/fruit-details.module#FruitDetailsPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
