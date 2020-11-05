import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from '../models/article';
import {Tag} from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private baseUrl = 'http://localhost:3000/api/v1';
  private url: 'http://admin.blob-zone.com/api/v1/articles';

  constructor(private http: HttpClient) { }

  postArticle(article: string) {
    // return this.http.post<Article>('http://admin.blob-zone.com/api/v1/articles', article);
    return this.http.post<Article>('http://localhost:3000/api/v1/articles', article);
  }

  uploadImage(formData: FormData) {
    return this.http.post<any>('http://localhost:3000/api/v1/articles/images', formData);
  }

  postTag(tag: string) {
    // return this.http.post<Tag>('http://admin.blob-zone.com/api/v1/tags', tag);
    return this.http.post<Tag>('http://localhost:3000/api/v1/tags', tag);
  }

  getTags() {
    // return this.http.get('http://admin.blob-zone.com/api/v1/articles');
    return this.http.get('http://localhost:3000/api/v1/articles');
  }

  getArticles() {
    // return this.http.get('http://admin.blob-zone.com/api/v1/articles');
    return this.http.get('http://localhost:3000/api/v1/articles');
  }

  deleteArticleById(id: string) {
    // return this.http.delete(`http://admin.blob-zone.com/api/v1/articles/${id}`);
    return this.http.delete(`http://localhost:3000/api/v1/articles/${id}`);
  }
}
