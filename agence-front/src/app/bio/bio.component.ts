import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment.prod';


@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  imagePath = environment.imagePath;
  imgFile = 'uploads/1605884279361-362960730';
  constructor() { }

  ngOnInit(): void {
  }

}
