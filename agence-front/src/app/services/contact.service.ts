import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MessageContact} from '../models/messageContact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  baseUrl = 'http://localhost:3000/api/v1';
/*baseUrl: 'http://admin.blob-zone.com/api/v1';*/

  constructor(private http: HttpClient) { }

  postMessageContact(msgContact: string) {
    return this.http.post<MessageContact>(`http://admin.blob-zone.com/api/v1/msg-contacts`, msgContact);
  }
}
