import { Component, OnInit } from '@angular/core';
import { info_class } from '../Classes/info';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  infoarr:info_class[]=[];
  email_id:string;
  email_id1:string;
  password:string;
  u_type:string;
  flag:boolean=true;
  constructor(private _loginser:LoginService,private _r:Router,public alertController: AlertController) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Login Successfully',
      buttons: ['OK']
    });
    await alert.present();
  }
  async presentAlert1() {
    const alert = await this.alertController.create({
      message: 'Invalid Username And Password',
      buttons: ['OK']
    });
    await alert.present();
    this._r.navigate(['login']);
  }
  
  onsignup(){
    this._r.navigate(['signup'])
  }
  onLogin(){
    
    console.log(this.email_id,this.password);
    this._loginser.getUserLogin(new info_class(this.email_id,this.password)).subscribe(
      (data:any[])=>{
        console.log(data);
        if(data.length>0)
        {
          this.presentAlert();
          localStorage.setItem('email_id',this.email_id);
        console.log(localStorage.getItem('email_id'));
        this._r.navigate(['home'])
        }
        else
        {
          this.presentAlert1();
          this._r.navigate(['login']);
        }
      }
    );
}
  ngOnInit() {
  }
  onforget(){
    this._r.navigate(['forgetpassword'])
  }
}

