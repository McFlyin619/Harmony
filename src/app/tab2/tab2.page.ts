import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  messageText = '';
  pictureUrl = '';

  constructor(public toastController: ToastController) {}

  messageSend() {
    console.log("Message:",this.messageText, "|| URL:", this.pictureUrl);
    this.messageText ='';
    this.pictureUrl = '';
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Message Posted!',
      duration: 6000,
      position: 'top',
      color: 'primary'
    });
    toast.present();
  }

}
