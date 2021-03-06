import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: '**', redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
