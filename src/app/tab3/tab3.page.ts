import { Component } from '@angular/core';
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
      // filter to get only my friends
      this.friendsToDisplay = [];
      // travel the list of friends
     for(var i=0; i< list.length; i++) {
       // compare if the friendOf = my username
       let friend = list[i];
       if(friend.friendOf == this.shared.userName) {
          // if so push it to the friendsToDisplay array
          this.friendsToDisplay.push(friend);
       }
     }

    //  Array filter 
    // Homework = this.friendsToDisplay = list.filter(..........)<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
      
      
    });
  }

  saveFriend() {
    this.model.friendOf = this.shared.userName; 
    console.log('saving friend', this.model);
    
    // Save it
    this.data.saveFriend(this.model);

    // Clear form
    this.model = new Friend();
  }

}
