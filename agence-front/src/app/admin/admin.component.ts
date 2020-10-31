import { Component, OnInit } from '@angular/core';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  messages;
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getMsgContacts();
  }

  getMsgContacts() {
    this.contactService.getMessageContact().subscribe((data) => {
      this.messages = data;
    });
  }

  deleteMsg(id: string) {
    return this.contactService
      .deleteMsgById(id)
      .subscribe((data) => this.refreshData(data));
  }

  refreshData(data) {
    // tslint:disable-next-line:no-shadowed-variable
    this.contactService.getMessageContact().subscribe(data => {
      this.messages = data;
    });
  }
}
