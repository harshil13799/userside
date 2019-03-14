import { Component, OnInit } from '@angular/core';
import { PastorderService } from '../services/pastorder.service'
import { Router } from '@angular/router';
import { bill_class } from '../classes/bill';

@Component({
  selector: 'app-pastorder',
  templateUrl: './pastorder.page.html',
  styleUrls: ['./pastorder.page.scss'],
})
export class PastorderPage implements OnInit {

  constructor(private _past:PastorderService,private _route:Router) { }
  pastarr:bill_class[]=[];
  onclickmore(item){
    this._route.navigate(['/pastorderdetail',item.bill_id]);
  }
  ngOnInit() {
    this._past.getbillrecord(localStorage.getItem('email_id')).subscribe(
      (data:any)=>{
        console.log(data);
        this.pastarr=data;
      
      }
    );

  }

}
