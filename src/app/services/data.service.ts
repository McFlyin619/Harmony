import { Injectable } from '@angular/core';
import { Message } from '../models/message';;

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Friend } from '../models/friend';
import { firestore } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private allMessages: Observable<Message[]>;
  private allFriends: Observable<Friend[]>;

  // Collection of objects <-----> database
  messageCollection: AngularFirestoreCollection<Message>;
  friendCollection: AngularFirestoreCollection<Friend>;

  constructor(private fb: AngularFirestore) { 
    this.messageCollection = fb.collection<Message>('messages');
    this.friendCollection = fb.collection<Friend>('friends');

    this.retrieveMessages();
  }

  public saveMessage(message) {
    var item = Object.assign({}, message);
    this.messageCollection.add(item); // Save to DB
  }

  public saveFriend(friend) {
    var item = Object.assign({}, friend);
    this.friendCollection.add(item);
  }

  private retrieveMessages() {
    this.allMessages = this.messageCollection.snapshotChanges().pipe(
      map( actions => {
        return actions.map(m => {
          var data = m.payload.doc.data();
          var thierDate: any = data.createdOn;
          data.createdOn = new firestore.Timestamp(thierDate.seconds, thierDate.nanoseconds).toDate();
          return {... data};
        });
      })
    );
  }

  private retieveFriends() {
    this.allFriends = this.friendCollection.valueChanges();
  }

  public getAllMessages() {
    this.retrieveMessages();
    return this.allMessages;
  }

  public getAllFriends() {
    this.retieveFriends();
    return this.allFriends;
  }


  
}
