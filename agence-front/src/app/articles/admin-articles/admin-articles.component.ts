import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ArticleService} from '../../services/article.service';


@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.scss']
})
export class AdminArticlesComponent implements OnInit {
  form: FormGroup;
  articles;
  constructor( private articleService: ArticleService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.getArticles();
  }

  initForm() {
    this.form = this.fb.group({
      titre: '',
      descriptif: '',
    });
  }

  post() {
    if (this.form.valid) {
      this.articleService
        .postArticle(this.form.value)
        .subscribe(data => this.refreshData(data));
      alert('Article enregistré');
    }
    else {
      alert('Un ou plusieurs champs sont incomplets');
    }
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
