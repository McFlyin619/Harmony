import { Component } from '@angular/core';
import { Message } from '../models/message';
import { SharedService } from '../services/shared.service';
import { DataService } from '../services/data.service';
import { Friend } from '../models/friend';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  model: Message = new Message();
  myFriends: Friend[] = [];  

  constructor(private shared: SharedService, private data: DataService) {
    this.data.getAllFriends().subscribe(list => {
      this.myFriends = list.filter(friend => friend.friendOf == shared.userName);
    });
  }

  messageSend() {
    this.model.from = this.shared.userName;
    this.data.saveMessage(this.model);
    console.log('Saved:', this.model);
    this.model = new Message();
  }
}
