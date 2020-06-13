import { Component } from '@angular/core';
import { Message } from '../models/message';
import { SharedService } from '../services/shared.service';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  model: Message = new Message();

  constructor(private shared: SharedService, private data: DataService) {}

  messageSend() {
    this.model.from = this.shared.userName;
    this.model.fromPro = this.shared.profile;
    // call save function on dataservice
    this.data.saveMessage(this.model);
    console.log('Saved:', this.model);
    
    // clear form
    this.model = new Message();
    
  }

}
