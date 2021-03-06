import { Component, ɵConsole } from '@angular/core';
import { Friend } from '../models/friend';
import { SharedService } from '../services/shared.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  model = new Friend();
  friendsToDisplay: Friend[] = [];
  
  constructor(private shared: SharedService, private data: DataService) {
    this.data.getAllFriends().subscribe(list => {
     this.friendsToDisplay = list.filter(friend => friend.friendOf == shared.userName);
    });
  }

  saveFriend() {
    this.model.friendOf = this.shared.userName; 
    console.log('saving friend', this.model);
    this.data.saveFriend(this.model);
    this.model = new Friend();
  }

}
