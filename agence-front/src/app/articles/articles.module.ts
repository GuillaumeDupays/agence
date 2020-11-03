import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { AdminArticlesComponent } from './admin-articles/admin-articles.component';
import {ReactiveFormsModule} from '@angular/forms';




@NgModule({
  declarations: [ArticleListComponent, ArticleDetailComponent, AdminArticlesComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ArticlesModule { }
