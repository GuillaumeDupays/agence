import {Component, ElementRef, OnInit} from '@angular/core';
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

  constructor( private articleService: ArticleService, private fb: FormBuilder, private el: ElementRef) { }

  ngOnInit(): void {
    this.initForm();
    this.getArticles();
  }

  initForm() {
    this.form = this.fb.group({
      titre: '',
      descriptif: '',
      texte: '',
      image: ''
    });
  }

  upload() {
    const inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#image');
    const fileCount: number = inputEl.files.length;
    if (fileCount > 0) {
      const formData = new FormData();
      formData.append('image', inputEl.files.item(0));
      this.articleService.uploadImage(formData).subscribe(data => console.log(data), error => console.error(error));
    }
    console.log('filecount', fileCount);
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
