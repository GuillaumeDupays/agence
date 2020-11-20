import {Component, ElementRef, OnInit} from '@angular/core';
import {ArticleService} from '../../../services/article.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-admin-article-list',
  templateUrl: './admin-article-list.component.html',
  styleUrls: ['./admin-article-list.component.scss']
})
export class AdminArticleListComponent implements OnInit {
  articles;
  isShow = true;

  toggleDisplay() {
    this.isShow = !this.isShow;
  }
  constructor( private articleService: ArticleService, private fb: FormBuilder, private el: ElementRef) { }

  ngOnInit(): void {

    this.getArticles();
  }

  getArticles() {
    this.articleService.getArticles().subscribe((data) => {
      this.articles = data;
    });
  }

  deleteArticle(id: string) {
    return this.articleService
      .deleteArticleById(id)
      .subscribe((data) => this.refreshData(data));
  }

  refreshData(data) {
    // tslint:disable-next-line:no-shadowed-variable
    this.articleService.getArticles().subscribe(data => {
      this.articles = data;
    });
  }
}
