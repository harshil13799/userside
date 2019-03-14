import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filterpage',
  templateUrl: './filterpage.page.html',
  styleUrls: ['./filterpage.page.scss'],
})
export class FilterpagePage implements OnInit {

  constructor(public route:Router) { }
  onclickcart()
  {
    this.route.navigate(['cart']);
  }
  ngOnInit() {
  }

}
