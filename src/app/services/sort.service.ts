import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SortService {
  private sort:string='http://Localhost:3000/sort/';
  constructor(private _http:HttpClient) { }
  getallproductINASC()
  {
    return this._http.get(this.sort);
  }
}
