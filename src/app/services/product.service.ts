import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { product_class } from '../Classes/product';
import { proupdate_class } from '../Classes/productupdate';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private product:string='http://Localhost:3000/product/';
  private productwithoutimg:string='http://Localhost:3000/updateorderafterorder/';
  constructor(private _http:HttpClient) { }
  getAllproduct(){
    return this._http.get(this.product);
  }
  getAllproById(p_id)
  {
    console.log(p_id);
    return this._http.get(this.product+p_id)
  }
  updateprowithoutimg(item){
    let body=JSON.stringify(item)
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.productwithoutimg,body,{headers:head1})
}
}
