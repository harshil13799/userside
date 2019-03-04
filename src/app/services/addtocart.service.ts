import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { cart_class } from '../Classes/cart';



@Injectable({
  providedIn: 'root'
})
export class AddtocartService {
  private cart:string='http://Localhost:3000/cart/';
  constructor(private _http:HttpClient) { }
  getAllcart(){
    return this._http.get(this.cart);
  }
  /*deletecart(item:cart_class[]){
      let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
      return this._http.post(this.deleteallcart,body,{headers:head1})
  }*/
  deletecartByID(item:cart_class){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.cart+item.c_id,body,{headers:head1})
}
  addcart(item){
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.cart,item)
  }
  getAllcartById(email_id)
  {
    console.log(email_id)
    return this._http.get(this.cart+email_id)
  }
  updatecart(item){
    let body=JSON.stringify(item)
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.cart,body,{headers:head1})
  }
}
