import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Routes } from '@angular/router';
import { changepwd_class } from '../Classes/changepwd';
import { ChangepswdService } from '../services/changepswd.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-editpassword',
  templateUrl: './editpassword.page.html',
  styleUrls: ['./editpassword.page.scss'],
})
export class EditpasswordPage implements OnInit {
  x:string;
  email_id:string;
  password:string;
  newpswd:string;
  oldpswd:string;
  
  constructor(private _route:Router,private _actroute:ActivatedRoute,private _update:ChangepswdService,public alertController: AlertController) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Old Password And New Password Must be Different',
      buttons: ['OK']
    });
    await alert.present();
  }
  onupdate(){
    if(this.oldpswd==this.newpswd)
    {
        this.presentAlert();
    }
    else
    {
    this._update.updatePassword(new changepwd_class(this.email_id,this.newpswd)).subscribe(
      (data:changepwd_class[])=>{
        this._route.navigate(['viewprofile'])
      }
    );
    }
  }
  onclickback(){
    this._route.navigate(['viewprofile']);
  }
  oncancel(){
    this._route.navigate(['viewprofile']);
  }
  ngOnInit() {
    this.x=this._actroute.snapshot.params['email_id'];
    this._update.getAllUserByEmail_id(this.x).subscribe(
      (data:changepwd_class[])=>{
        this.email_id=data[0].email_id;
        this.password=data[0].password;
      }
    );
  }

}
