import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { AdminArticlesComponent } from './admin-articles/admin-articles.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EditArticleComponent } from './admin-articles/edit-article/edit-article.component';
import { AdminArticleListComponent } from './admin-articles/admin-article-list/admin-article-list.component';



@NgModule({
  declarations: [ArticleListComponent, ArticleDetailComponent, AdminArticlesComponent, EditArticleComponent, AdminArticleListComponent],
    imports: [
        CommonModule,
        ArticlesRoutingModule,
        ReactiveFormsModule,
    ]
})
export class ArticlesModule { }
