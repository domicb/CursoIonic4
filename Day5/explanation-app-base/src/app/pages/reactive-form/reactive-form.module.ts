import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReactiveFormPage } from './reactive-form.page';
import { AppLoadingFeedbackComponent } from 'src/app/app-loading-feedback/app-loading-feedback.component';

const routes: Routes = [
  {
    path: '',
    component: ReactiveFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AppLoadingFeedbackComponent,
    RouterModule.forChild(routes)
  ],
  declarations: [ReactiveFormPage]
})
export class ReactiveFormPageModule {}
