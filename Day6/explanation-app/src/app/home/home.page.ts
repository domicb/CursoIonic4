import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { TranslateService } from '@ngx-translate/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  
  constructor(private toastController: ToastController,
    private truncatePipe: TruncatePipe,
    private translate: TranslateService,
    private postService: PostService){

}

ngOnInit(){
  this.postService.getRemoteUser().subscribe((users) => {
    console.log(users);
  })
}

public async presentToast(): Promise<void> {
  const toast = await this.toastController.create({
    
   message: this.truncatePipe.transform('El veloz murciélago hindú comía feliz cardillo y   kiwi', 40),
    duration: 2000
  });
  toast.present();
}

public async presentSayHello(): Promise<void> {
  const toast = await this.toastController.create({
    
   message: this.translate.instant('helloName', {name: 'world'}),
    duration: 2000
  });
  toast.present();
}
/*
transform(value: string, n: number): string {
  
  return n === 0 || value.length < n ? value:
    value.substring(0,n+4)+ '...';
}*/

transform(value: string, n: number, words?: string): string {
  if(words === 'words'){
    return n === 0 || value.length < n ? value:
    value.substring(0,n)+ '...';
  }

}


  
}


