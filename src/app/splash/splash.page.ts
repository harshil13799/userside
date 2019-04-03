import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {


  constructor(private _route:Router) { }
  onclickDiv()
  {
    this._route.navigate(['/login']);
  }

  ngOnInit() {
  }

}
