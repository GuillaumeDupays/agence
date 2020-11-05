import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  articleList;
  imagePath = environment.imagePath;

  constructor( private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.articleService
      .getArticles()
      .subscribe(data => {
        this.articleList = data;
      } );
  }
}
