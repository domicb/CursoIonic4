import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController) {

  }

  public openDialog(): void {

    const alertPromise = this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [{
        text: 'OK',
        handler:() => {
          console.log('Ok Pressed');
        }
      },{
      text: 'Cancel',
      handler: () =>{
        console.log('Cancel');
      }
    }]
    });
    alertPromise.then((alert) => {
      alert.present();
    });
    
  }

/*  public async openDialog(): Promise<void> {

    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [{
        text: 'OK',
        handler:() => {
          console.log('Ok Pressed');
        }
      },{
      text: 'Cancel',
      handler: () =>{
        console.log('Cancel');
      }
    }]
    });

    await alert.present();
  }*/
}
