import { Component, OnInit } from '@angular/core';
import { AddtocartService } from '../services/addtocart.service';
import { cart_class } from '../classes/cart';
import { product_class } from '../classes/product';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { order_class } from '../Classes/order';
import { orderdetail_class } from '../Classes/orderdetail';
import { proupdate_class } from '../Classes/productupdate';
import { ProductService } from '../services/product.service';
import { AlertController } from '@ionic/angular';
import { LoginService } from '../services/login.service';


export class productup{
  constructor(public p_id:number,public p_qty){}
}

export interface qtyarr{
  value:string;
  viewValue:string;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})


export class CheckoutPage implements OnInit {
  user_id:string;
  fk_user_id:number;
  cart_arr:cart_class[]=[];
  //cat_pro_arr:catpro[]=[];
  qty:number[]=[];
  price:number[]=[];
  i:number;
  j:number;
  tot:number[]=[];
  //product_arr:product[]=[];
  fk_p_id:number;
  fk_p_name:string;
  fk_p_price:number;
  fk_p_qty:number;
  fk_cat_id:number;
  fk_p_mfg:string;
  fk_p_img:string;
  fk_email_id:string;
  c_id:number;
  c_price:number;
  p_qty:number;
  c_qty:number;
  cnt:number=0;
  date1:Date=new Date();
  x:number;
  rdn1:string;
  flag:boolean=true;
  flag1:boolean=true;
  prodarr:product_class[]=[];
    cartpro_arr:cart_class[]=[];
    newqty:number[]=[];
    newqt:number[]=[];
    newqty1:number[]=[];
    total:number=0;
    total1:number=0;
    fk_address:string;
    totalpayble:number=0;
    arr1:orderdetail_class[]=[];
    discount:string;
    btnflag:boolean=false;
    constructor(private _route:Router,private _order:OrderService,private _addcart:AddtocartService,private _proser:ProductService,public alertController: AlertController,private _service:LoginService) { }

    async presentAlert() {
      const alert = await this.alertController.create({
        message: 'PROMO CODE applied Successfully',
        buttons: ['OK']
      });
      await alert.present();
    }
    async presentAlert1() {
      const alert = await this.alertController.create({
        message: 'Invalid PROMO CODE',
        buttons: ['OK']
      });
      await alert.present();
    }

    async presentAlert2() {
      const alert = await this.alertController.create({
        message: 'Cart Value is Not Sufficient',
        buttons: ['OK']
      });
      await alert.present();
    }
    onclickback(){
      this._route.navigate(['product']);
    }
    
    onplaceorder(){

      console.log(this.rdn1,"RADIO");
        this.user_id=localStorage.getItem('email_id');
        this._service.getAllUserByEmail_id(this.user_id).subscribe(
          (data:any)=>{
            console.log(data);
            this.fk_address=data[0].u_address;
            console.log(this.fk_address);
          

        console.log(this.fk_address,"Address of emp");
        this._order.addorder(new order_class(this.total,this.user_id,this.fk_address,this.rdn1)).subscribe(
          (data:any)=>{
            console.log(data);
            for(this.i=0;this.i<this.cart_arr.length;this.i++)
            {
                this.arr1.push(new orderdetail_class(data.insertId,this.cart_arr[this.i].fk_p_id,this.cart_arr[this.i].c_qty,this.cart_arr[this.i].qty,this.cart_arr[this.i].fk_p_price))
                this.newqty.push(this.cart_arr[this.i].c_qty*this.cart_arr[this.i].qty);
                //console.log(this.newqty[this.i]);
                this.newqty[this.i]=this.newqty[this.i]/1000;
                //console.log(this.newqty[this.i]);
                this._proser.getAllproById(this.cart_arr[this.i].fk_p_id).subscribe(
                  (data:product_class[])=>{
                   console.log(data);
                    this.prodarr=data;
                    for(this.i=0;this.i<this.prodarr.length;this.i++)
                    {
                  
                      this.newqty1.push(this.prodarr[this.i].p_qty-this.newqty[this.i]);
                      this.cnt++;
                      
                      console.log(this.newqty1);
                      for(this.i=0;this.i<this.cnt;this.i++)
                      {
                        this._proser.updateprowithoutimg(new productup(this.cart_arr[this.i].fk_p_id,this.newqty1[this.i])).subscribe(
                          (data:any)=>{
                              console.log(data);
                           }
                        );
                      }    
                    }
                    console.log(this.cnt,"cnt");      
                      
                    }
                    
                );
                
                console.log(this.newqty1);
                console.log(this.newqty1[this.i],"newqyyy");
                
            }
            for(this.i=0;this.i<this.newqty1.length;this.i++)
            {
              console.log(this.newqty1[this.i]);
            }
            this._order.addorderDetails(this.arr1).subscribe(
              (data:any)=>{
                console.log(data);
              }
            );
          }
        );
        console.log(this.cart_arr,"hello")
        this._addcart.deleteAllcart(this.cart_arr).subscribe(
          (data:any)=>
          {
            console.log(data);
          }
        );
      }
    );

    this._route.navigate(['/callback']);
    }
    onmakepayment(){
      //this._route.navigate['paytmpayment'];
      window.open('http://localhost:8080/','_self');
    }
    onclickcash(){
      this.flag=true;
      this.flag1=false;
    }
    onclickpaytm(){
      this.flag1=true;
      this.flag=false;
    }
    onclickdis(){
      if(this.discount=="NEW50")
      {
        if(this.total>100)
        {
        this.total=this.total-50;
        console.log(this.total);
        this.btnflag=true;
        this.presentAlert();
        }
        else{
          this.presentAlert2();
        }
      }
      else if(this.discount=="GRAB10")
      {
        this.total=this.total-10;
        console.log(this.total);
        this.btnflag=true;
        this.presentAlert();
      }
      else
      {
        this.presentAlert1();
      }
    }
  ngOnInit() {
    this.user_id=localStorage.getItem('email_id');
    this._addcart.getAllcartById(this.user_id).subscribe(
    (data:cart_class[])=>{
      this.cart_arr=data;
      console.log(this.cart_arr);
      for(this.i=0;this.i<=data.length;this.i++){
        this.qty.push(1);
      }
    }
  );
      this.user_id=localStorage.getItem('email_id');
      this._addcart.getAllcartById(this.user_id).subscribe(
        (data:cart_class[])=>{
          console.log(data);
          this.cartpro_arr=data;
          this.fk_p_name=data[0].fk_p_name;
          this.fk_p_img=data[0].fk_p_img;
          this.fk_p_price=data[0].c_price;
          this.c_price=data[0].c_price;
          
          for(this.i=0;this.i<data.length;this.i++){
              this.tot.push(data[this.i].c_price);
             this.total+=data[this.i].c_price;
            }
            this.total1=this.total;
            this.totalpayble=10;
            console.log(this.totalpayble);
            this.total=this.total+this.totalpayble;
            console.log(this.total);
        }
      );
      
  }

}
