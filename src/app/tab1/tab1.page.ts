import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { SharedService } from '../services/shared.service';
import { Message } from '../models/message';
import { Friend } from '../models/friend';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  messagesToDisplay:  Message[];
  myFriends: Friend[] = [];
  userMessages = [];

  constructor(private data: DataService, private shared: SharedService) {
    this.data.getAllMessages().subscribe( list => {
      this.messagesToDisplay = list.filter(message => message.to == shared.userName || message.from == shared.userName || message.to == "Everyone");
    });
    this.data.getAllFriends().subscribe(list => {
      this.myFriends = list.filter(friend => friend.friendOf == shared.userName);
    });
  }
  
  ngOnInit() {}


}
