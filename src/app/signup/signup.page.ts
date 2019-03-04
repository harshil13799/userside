import { Component, OnInit } from '@angular/core';
import { info_class } from '../Classes/info';
import { SignupService } from '../services/signup.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
gender_arr:string[]=["male","female"];
cityarr:string[]=["Ahmedabad","Baroda","Surat"];
gender:string="male";
infoarr:info_class[]=[];
email_id:string;
u_name:string;
password:string;
u_mno:number;
u_city:string;
u_gender:string;
u_address:string;
x:string;
  constructor(private _route:Router,private _signupservice:SignupService,public alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'SignUp Successfully',
      buttons: ['OK']
    });

    await alert.present();
  }
  onsignup(item){
    
    this._signupservice.forsignup(new info_class(this.email_id,this.password,this.u_name,this.u_gender,this.u_address,this.u_city,this.u_mno)).subscribe(
      (data:info_class)=>{
        this.infoarr.push(new info_class(this.email_id,this.password,this.u_name,this.u_gender,this.u_address,this.u_city,this.u_mno));
        this.presentAlert();
        this._route.navigate(['/login']);
      }
    )
    
  }
  oncancel(){
    this._route.navigate(['/login']);
  }
  ngOnInit() {
  }

}
