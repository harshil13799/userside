import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { wishlist_class } from '../Classes/wishlist';


@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlist:string='http://Localhost:3000/wishlist/';
  //private deleteallcart:string='http://Localhost:3000/deleteallcart/';
  constructor(private _http:HttpClient) { }
  getAllwishlist(){
    return this._http.get(this.wishlist);
  }
  
  deletewishlistByID(item:wishlist_class){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.wishlist+item.w_id,body,{headers:head1})
}
  addtowishlist(item){
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.wishlist,item)
  }
  getAllwishlistById(email_id)
  {
    console.log(email_id)
    return this._http.get(this.wishlist+email_id)
  }
  
 /* deleteAllwishlst(item){
    console.log(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.deleteallcart,item)
  }*/
}
