import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { SharedService } from '../services/shared.service';
import { Message } from '../models/message';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  messagesToDisplay:  Message[];

  constructor(private data: DataService, private shared: SharedService) {
    this.data.getAllMessages().subscribe( list => {
      this.messagesToDisplay = [];
      for(let i=0; i< list.length; i++) {
        let message = list[i];
        if(message.from == shared.userName || message.to == shared.userName || message.to == "Everyone") {
          this.messagesToDisplay.push(message);
        }
      }
    });

  }

  ngOnInit() {
    
  }

}
