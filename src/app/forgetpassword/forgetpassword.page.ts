import { Component, OnInit } from '@angular/core';
import { info_class } from '../Classes/info';
import { MailService } from '../services/mail.service';
import { sendmail } from '../Classes/mail';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.page.html',
  styleUrls: ['./forgetpassword.page.scss'],
})
export class ForgetpasswordPage implements OnInit {
  email_id:string;
  password:string;
subject1:string;
i:number=0;
flag:number=0;
  constructor(private _mail:MailService,private _route:Router,public alertController: AlertController,private _userser:UserserviceService) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Password Send On Your Register Mail',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlert1() {
    const alert = await this.alertController.create({
      message: 'Provided Email_id Is Not Register',
      buttons: ['OK']
    });
    await alert.present();
  }

  onforget(){
    this._userser.getAlluser().subscribe(
      (data:any)=>{
        for(this.i=0;this.i<data.length;this.i++)
        {
            if(this.email_id==data[this.i].email_id)
              {
                    this.flag=1;
              }
        }
        if(this.flag==1)
        {
          this.presentAlert();
        this._mail.getpassById(this.email_id).subscribe(
          (data:info_class[])=>{
            if(data.length>0)
            {
              this.password=data[0].password;
              this._mail.sendmail(new sendmail(this.email_id,this.subject1,"Your Password Is : "+this.password)).subscribe(
                (data:sendmail[])=>{
    
                }
                );
                  
                  
            }
            }
          );
        }
        else
        {
            this.presentAlert1();
        }
    }
    );
    this._route.navigate(['\login']);
  }
  oncancel(){
    this._route.navigate(['/login']);
  }
  ngOnInit() {
  }

}
