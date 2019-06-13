import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    path: 'reactive-form-1',
    loadChildren: './pages/reactive-form-1/reactive-form-1.module#ReactiveForm1PageModule'
  },
  {
    path: 'reactive-form-2',
    loadChildren: './pages/reactive-form-2/reactive-form-2.module#ReactiveForm2PageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
