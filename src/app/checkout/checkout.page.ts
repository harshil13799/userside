import { Component, OnInit } from '@angular/core';
import { AddtocartService } from '../services/addtocart.service';
import { cart_class } from '../classes/cart';
import { product_class } from '../classes/product';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';


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
  c_qty:number;
  date1:Date=new Date();
  x:number;
  prodarr:product_class[]=[];
    cartpro_arr:cart_class[]=[];
    total:number=0;

    constructor(private _route:Router,private _order:OrderService,private _addcart:AddtocartService) { }
    onclickback(){
      this._route.navigate(['product']);
    }
    oncheck(){
      
        }
        onchange(item,i){
      this.total=0;
          this.tot[i]=item.p_price*this.qty[i];
          for(let i=0;i<this.tot.length;i++)
          {
            this.total+=this.tot[i];
          }
          }
        ondelete(item,i){
          this.total=this.total-this.tot[i];
          this.tot.splice(i,1);
          this.price.splice(i,1);
          this.qty.splice(i,1);
          this.cartpro_arr.splice(this.cartpro_arr.indexOf(item),1);
          this._addcart.deletecartByID(item.c_id).subscribe(
            (data:any)=>{
              this.cart_arr.splice(this.cart_arr.indexOf(item),1);
            }
          );
      
      
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
  
  /*this._addcart.getAllcart().subscribe(
    (data:cart_class[])=>{
      this.cart_arr=data;
      this.fk_email_id=data[0].fk_email_id;
      console.log(this.cart_arr);
      console.log(this.fk_user_id);*/
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
  
        }
      );
   // }
  //);
  
  // this._product.getAllProduct().subscribe(
  //   (data:product[])=>{
  //     this.product_arr=data;
  //     console.log(data);
  
  //   }
  // );
  




  }

}
