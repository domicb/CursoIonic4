import { Component, OnInit } from '@angular/core';
import { states } from 'src/app/models/states.model';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-app-loading-feedback',
  templateUrl: './app-loading-feedback.component.html',
  styleUrls: ['./app-loading-feedback.component.scss'],
})
export class AppLoadingFeedbackComponent implements OnInit {

  public state: states;
  constructor(public toastController: ToastController) { 
    
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Loading',
      duration: 2000
    });
    toast.present();
  }


  ngOnInit() {}
  
}
