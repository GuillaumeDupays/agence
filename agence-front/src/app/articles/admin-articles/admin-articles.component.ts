import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ArticleService} from '../../services/article.service';

@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.scss']
})
export class AdminArticlesComponent implements OnInit {
  isShow = true;

  toggleDisplay() {
    this.isShow = !this.isShow;
  }
  constructor( private articleService: ArticleService, private fb: FormBuilder, private el: ElementRef) { }

  ngOnInit(): void {

  }

}
