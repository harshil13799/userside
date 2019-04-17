import { Component, OnInit,ViewChild } from '@angular/core';
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
  flag:boolean=true;
  flag1:boolean=true;
  shownGroup = null;
email_id:string;
  
  onclickstart()
  {
    this._route.navigate(['/home']);
  }
  onclickback(){
    this._route.navigate(['/home']);
  }
  ngOnInit() {

    this.email_id=localStorage.getItem('email_id');
           this._past.getbilldetailsbyemail(this.email_id).subscribe(
             (data:any)=>{
              if(data.length!=0)
              {
                  this.flag=false;
                  console.log(this.flag,"11");
                  this.flag1=true;
              }
              if(data.length==0)
              {
                  this.flag=true;
                  console.log(this.flag,"new");
                  this.flag1=false;
              }
               console.log(data);
               this.pastarr=data;
            }
           
           );   
  }
}
