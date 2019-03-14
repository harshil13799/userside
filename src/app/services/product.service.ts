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

  private searchproduct='http://localhost:3000/productsearch/';

  private productwithoutimg:string='http://Localhost:3000/updateorderafterorder/';

  private deleteallpro:string='http://Localhost:3000/deleteandgetallpro/';
  constructor(private _http:HttpClient) { }
  getAllproduct(){
    return this._http.get(this.product);
  }
  getallproBycat(cat_name:string){
    return this._http.get(this.deleteallpro+cat_name)
  }
  getAllproById(p_id)
  {
    console.log(p_id);
    return this._http.get(this.product+p_id)
  }

  getallproByName(p_name)
  {
    return this._http.get(this.searchproduct+p_name)
  }

  updateprowithoutimg(item){
    let body=JSON.stringify(item)
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.productwithoutimg,body,{headers:head1})
}

}
