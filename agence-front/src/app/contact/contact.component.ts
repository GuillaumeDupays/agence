import { Component, OnInit } from '@angular/core';
import {ContactService} from '../services/contact.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  constructor( private contactService: ContactService, private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      nom: '',
      prenom: '',
      societe: '',
      telephone: '',
      mail: '',
      objet: '',
      message: '',
    });
  }

  postMsg() {
    if (this.form.valid) {
      this.contactService
        .postMessageContact(this.form.value)
        .subscribe((data) => console.log('message', data));
    }
  }

}
