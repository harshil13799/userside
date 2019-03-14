import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { order_class } from '../Classes/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private order:string="http://Localhost:3000/order/";
  private orderdetail:string="http://Localhost:3000/orderdetail/";
  private deleteorder:string="http://Localhost:3000/deleteorder/";
  private topfive:string="http://Localhost:3000/topfive/";
  private singleorderdelete:string="http://Localhost:3000/singleorderdelete/";
  constructor(private _http:HttpClient) { }
  getallorder()
  {
    return this._http.get(this.order);
  }
  addorder(item:order_class){
    console.log(item,"Hello order service");
    let body=JSON.stringify(item)
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.order,body,{headers:head1})
  }
  addorderDetails(item)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.orderdetail,body,{headers:head1});
  }
  topFive()
  {
    return this._http.get(this.topfive);
  }
  deleteallorder(item:order_class[])
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.deleteorder,body,{headers:head1})
  }
  singleOrderdelete(item:order_class){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.singleorderdelete+item.o_id,body,{headers:head1})
}
}
