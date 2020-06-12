import { Injectable } from '@angular/core';
import { Message } from '../models/message';;



@Injectable({
  providedIn: 'root'
})
export class DataService {

  private allMessages: Message[] = [];

  constructor() { }

  public saveMessage(message) {
    this.allMessages.push(message);
  }

  public getAllMessages() {
    return this.allMessages;
  }
}
