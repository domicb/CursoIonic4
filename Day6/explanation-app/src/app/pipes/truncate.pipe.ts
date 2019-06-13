import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Pipe({
  name: 'truncate'
})

@Injectable({
  providedIn: 'root'
})
export class TruncatePipe implements PipeTransform {

  constructor(private toastController: ToastController,
      private truncatePipe: TruncatePipe){
  
  }

  public async presentToast(): Promise<void> {
    const toast = await this.toastController.create({
      
     message: this.truncatePipe.transform('Tus cambios han sido guardados', 2),
      duration: 2000
    });
    toast.present();
  }

  transform(value: string, n: number): string {
    
    return n === 0 || value.length < n ? value:
      value.substring(0,n)+ '...';
  }

  

}
