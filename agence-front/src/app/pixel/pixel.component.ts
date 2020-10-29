import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pixel',
  templateUrl: './pixel.component.html',
  styleUrls: ['./pixel.component.scss']
})
export class PixelComponent implements OnInit {
  pixel = false;
  pix = false;
  constructor() { }

  ngOnInit(): void {
  }
}
