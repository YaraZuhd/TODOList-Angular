import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-head-of-page',
  templateUrl: './head-of-page.component.html',
  styleUrls: ['./head-of-page.component.scss']
})
export class HeadOfPageComponent implements OnInit {
  navbarOpen = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  toggleNavbar() {
    this.navbarOpen =!this.navbarOpen;
  }

  isHomeRoute():boolean{
    return this.router.url ==='/home';
  }
}
