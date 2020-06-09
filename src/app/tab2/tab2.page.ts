import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  messageText = '';
  pictureUrl = '';
  constructor() {}

  messageSend() {
    console.log("Message:",this.messageText, "|| URL:", this.pictureUrl);
    this.messageText ='';
    this.pictureUrl = '';
  }


}
