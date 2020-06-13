import { Injectable } from '@angular/core';
import { Message } from '../models/message';;

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private allMessages: Observable<Message[]>;

  // Collection of objects <-----> database
  messageCollection: AngularFirestoreCollection<Message>;


  constructor(private fb: AngularFirestore) { 
    this.messageCollection = fb.collection<Message>('messages');

    this.retrieveMessages();
  }

  public saveMessage(message) {
    // push to DB
    var item = Object.assign({}, message);
    this.messageCollection.add(item); // Save to DB
  }

  private retrieveMessages() {
    this.allMessages = this.messageCollection.valueChanges();
  }

  public getAllMessages() {
    this.retrieveMessages();
    return this.allMessages;
  }
}
