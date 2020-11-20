import {Component, ElementRef, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ArticleService} from '../../../services/article.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {

  form: FormGroup;
  articles;

  constructor( private articleService: ArticleService, private fb: FormBuilder, private el: ElementRef) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      titre: '',
      presentation: '',
      texte: '',
      image: '',
      auteur: ''
      // nomAuteur: ''
    });
  }

  upload() {
    const inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#image');
    const fileCount: number = inputEl.files.length;
    if (fileCount > 0) {
      const formData = new FormData();
      formData.append('image', inputEl.files.item(0));
      this.articleService
        .uploadImage(formData)
        .subscribe(data => console.log(data), error => console.error(error));
    }
    console.log('filecount', fileCount);
  }

  post() {
    if (this.form.valid) {
      this.articleService
        .postArticle(this.form.value)
        .subscribe(data => data);
      alert('Article enregistré');
    }
    else {
      alert('Un ou plusieurs champs sont incomplets');
    }
  }

}
