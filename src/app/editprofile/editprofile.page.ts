import { Component, OnInit } from '@angular/core';
import { info_class } from '../Classes/info';
import { LoginService } from '../services/login.service';
import { Router,ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
  infoarr:info_class[]=[];
  email_id:string;
  u_name:string;
  password:string;
  u_mno:number;
  u_city:string;
  u_gender:string;
  u_address:string;
  x:string;
  constructor(private _route:Router,private _service:LoginService,private _acroute:ActivatedRoute,public alertController: AlertController) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Profile Updated Successfully',
      buttons: ['OK']
    });
    await alert.present();
  }
  onclickback(){
    this._route.navigate(['viewprofile']);
  }
  onsave(){
    this._service.updateprofile(new info_class(this.email_id,this.password,this.u_name,this.u_gender,this.u_address,this.u_city,this.u_mno)).subscribe(
      (data:any)=>{
        this._route.navigate(['viewprofile']);
        this.presentAlert();
      }
    );
  }
  oncancel(){
    this._route.navigate(['viewprofile']);
  }

  ngOnInit() {
    this.email_id=localStorage.getItem('email_id');
    this._service.getAllUserByEmail_id(this.email_id).subscribe(
      (data:info_class[])=>{
        this.email_id=data[0].email_id;
        this.u_name=data[0].u_name;
        this.password=data[0].password;
        this.u_mno=data[0].u_mno;
        this.u_city=data[0].u_city;
        this.u_gender=data[0].u_gender;
        this.u_address=data[0].u_address;
      }
    );

  }

}
