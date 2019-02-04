import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { category_class } from '../Classes/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private category:string='http://Localhost:3000/category/';
  private deleteallpro:string='http://Localhost:3000/deleteandgetallpro/';
  constructor(private _http:HttpClient) { }
  getAllcat(){
    return this._http.get(this.category);
  }
  getallproBycat(cat_name:string){
    return this._http.get(this.deleteallpro+cat_name)
  }
}
