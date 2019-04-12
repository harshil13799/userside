import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.page.html',
  styleUrls: ['./callback.page.scss'],
})
export class CallbackPage implements OnInit {

  constructor(private _route:Router) { }
  onclickcontinue(){
    this._route.navigate(['/home']);
  }
  ngOnInit() {
  }

}
