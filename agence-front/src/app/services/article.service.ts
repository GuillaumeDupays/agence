import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from '../models/article';
import {Tag} from '../models/tag';

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

  postTag(tag: string) {
    return this.http.post<Tag>(`${this.baseUrl}/tags`, tag);
  }

  getTags() {
    return this.http.get(`${this.baseUrl}/tags`);
  }

  getArticles() {
    return this.http.get(`${this.baseUrl}/articles`);
  }

  deleteArticleById(id: string) {
    return this.http.delete(`http://localhost:3000/api/v1/articles/${id}`);
  }
}
