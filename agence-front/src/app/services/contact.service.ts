import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MessageContact} from '../models/messageContact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = 'http://localhost:3000/api/v1';
  private url: 'http://admin.blob-zone.com/api/v1';

  constructor(private http: HttpClient) { }

  postMessageContact(msgContact: string) {
    // return this.http.post<MessageContact>('http://admin.blob-zone.com/api/v1/msg-contacts', msgContact);
    return this.http.post<MessageContact>('http://localhost:3000/api/v1/msg-contacts', msgContact);
  }

  getMessageContact() {
    // return this.http.get('http://admin.blob-zone.com/api/v1/msg-contacts');
    return this.http.get('http://localhost:3000/api/v1/msg-contacts');
  }

  deleteMsgById(id: string) {
    // return this.http.delete(`http://admin.blob-zone.com/api/v1/msg-contacts/${id}`);
    return this.http.delete(`http://localhost:3000/api/v1/msg-contacts/${id}`);
  }
}
