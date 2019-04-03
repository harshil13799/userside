import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchproService {
  private search:string='http://Localhost:3000/search/';
  private searchprobycat:string='http://Localhost:3000/searchprobycat/';
  constructor(private _http:HttpClient) { }

  getallSearchproblank(){
    return this._http.get(this.search);
  }
  getallsearchpro(searcheditems){
    return this._http.get(this.search+searcheditems)
  }

  getallsearchprobycat(cat_name,searcheditems){
    return this._http.get(this.searchprobycat+cat_name+"/"+searcheditems)
  }
}
