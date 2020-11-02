import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private baseUrl = 'http://localhost:3000/api/v1';
  private url: 'http://admin.blob-zone.com/api/v1';

  constructor(private http: HttpClient) { }

  postArticle(article: string) {
    return this.http.post<Article>(`${this.baseUrl}/articles`, article);
  }
}
