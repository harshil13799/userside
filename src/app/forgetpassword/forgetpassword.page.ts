import { Component, OnInit } from '@angular/core';
import { info_class } from '../Classes/info';
import { MailService } from '../services/mail.service';
import { sendmail } from '../Classes/mail';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.page.html',
  styleUrls: ['./forgetpassword.page.scss'],
})
export class ForgetpasswordPage implements OnInit {
  email_id:string;
  password:string;
subject1:string;
  constructor(private _mail:MailService,private _route:Router,public alertController: AlertController) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Password Send On Your Register Mail',
      buttons: ['OK']
    });
    await alert.present();
  }

  onforget(){
    this._mail.getpassById(this.email_id).subscribe(
      (data:info_class[])=>{
        if(data.length>0){
          this.password=data[0].password;
          this._mail.sendmail(new sendmail(this.email_id,this.subject1,"Your Password Is : "+this.password)).subscribe(
            (data:sendmail[])=>{

            }
          );
         this.presentAlert();
         this._route.navigate(['']);
        }
        else
        {
          alert('Email_id is Not Correct');
        }
      }
    );
  }
  oncancel(){
    this._route.navigate(['/login']);
  }
  ngOnInit() {
  }

}
