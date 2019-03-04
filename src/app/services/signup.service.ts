import { Injectable } from '@angular/core';
import { info_class } from '../Classes/info';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private signup:string='http://Localhost:3000/signup/';
  constructor(private _http:HttpClient) { }
  forsignup(item:info_class){
    return this._http.post(this.signup,item)
  }
}
