import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  open = false;
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
 openNav() {
    document.getElementById('nav').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
  }

  // tslint:disable-next-line:typedef
  closeNav() {
    document.getElementById('nav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
  }



}
