import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private user:string='http://Localhost:3000/login/';
  constructor(private _http:HttpClient) { }
  getAlluser(){
    return this._http.get(this.user);
  }
}
