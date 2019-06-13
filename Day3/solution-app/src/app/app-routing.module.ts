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
    path: 'restorable-fruits-list',
    loadChildren: './pages/restorable-fruits-list/restorable-fruits-list.module#RestorableFruitsListPageModule'
  },
  {
    path: 'sandbox',
    loadChildren: './pages/sandbox/sandbox.module#SandboxPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
