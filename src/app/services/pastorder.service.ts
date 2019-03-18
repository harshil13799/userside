import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { bill_class } from '../Classes/bill';

@Injectable({
  providedIn: 'root'
})
export class PastorderService {
  private pastorder:string="http://Localhost:3000/pastorder/";
  private pastorderdetail:string="http://Localhost:3000/pastorderdetail/";
  private pastorderdetailbyemail:string="http://Localhost:3000/billdetailbyemail/";
  constructor(private _http:HttpClient) { }
  
  getbillrecord(email_id)
  {
    console.log(email_id);
    return this._http.get(this.pastorder+email_id);
  }
  getbilldetails(fk_bill_id)
  {
    console.log(fk_bill_id);
    return this._http.get(this.pastorderdetail+fk_bill_id);
  }
  getbilldetailsbyemail(fk_email_id)
  {
    console.log(fk_email_id);
    return this._http.get(this.pastorderdetailbyemail+fk_email_id);
  }
}
