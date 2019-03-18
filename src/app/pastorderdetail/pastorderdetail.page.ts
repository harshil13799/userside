import { Component, OnInit } from '@angular/core';
import { PastorderService } from '../services/pastorder.service'
import { Router,ActivatedRoute } from '@angular/router';
import { billdetail_class } from '../classes/billdetail';

@Component({
  selector: 'app-pastorderdetail',
  templateUrl: './pastorderdetail.page.html',
  styleUrls: ['./pastorderdetail.page.scss'],
})
export class PastorderdetailPage implements OnInit {
  constructor(private _past:PastorderService,private _route:Router,private _actsnap:ActivatedRoute) { }
  billdetailarr:billdetail_class[]=[];
id:number;
onclickback()
{
  this._route.navigate(['/pastorder']);
}
  ngOnInit() {
    this.id=this._actsnap.snapshot.params['bill_id'];
    this._past.getbilldetails(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.billdetailarr=data;
      }
     
    );

  }

}
