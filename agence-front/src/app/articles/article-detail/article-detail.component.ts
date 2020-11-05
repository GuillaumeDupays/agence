import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../services/article.service';
import {Observable} from 'rxjs';
import {Article} from '../../models/article';


@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  articles$: Observable<Article>;

  constructor( private activatedRoute: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.articles$ = this.articleService.getArticleById(id);
  }
}
