import {Component, ElementRef, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ArticleService} from '../../services/article.service';
import {EditArticleComponent} from '../../articles/admin-articles/edit-article/edit-article.component';

@Component({
  selector: 'app-post-image',
  templateUrl: './post-image.component.html',
  styleUrls: ['./post-image.component.scss']
})
export class PostImageComponent implements OnInit  {
  form: FormGroup;
  constructor( private articleService: ArticleService, private fb: FormBuilder, private el: ElementRef ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      nomImage: '',
      image: ''
    });
  }

  post() {
    if (this.form.valid) {
      this.articleService
        .postImage(this.form.value)
        .subscribe(data => data);
      console.log('Image ajoutée en base');
    }
  }

  addImage() {
    const inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#image');
    const fileCount: number = inputEl.files.length;
    console.log('filecount', fileCount);
  }
}
