import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AnimeBlobService {

  private url = environment.url;

  constructor(private http: HttpClient) { }

  getAllBlobs() {
    return this.http.get<any>(`${this.url}/blobs`);
  }
}
