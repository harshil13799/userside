import { Component, OnInit } from '@angular/core';
import { cart_class } from '../Classes/cart';
import { AddtocartService } from '../services/addtocart.service';
import { Router,ActivatedRoute } from '@angular/router';

export class changeqty{
  constructor(public c_price:number,public qty:number,public c_id:number){}
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
cartarr:cart_class[]=[];
qtyarr:number[]=[1,2,3,4,5,6,7,8,9,10];
qty:number[]=[];
qty1:number[]=[];
total:number;
price:number;
tot:number[]=[];
tot1:number[]=[];
i:number=0;
user_id:string;
c_price:number;
flag:boolean=true;
flag1:boolean=true;
qtyflag:boolean=false;
  constructor(private _actroute:ActivatedRoute,private _route:Router,private _cartser:AddtocartService) { }
oncheckout(){
  this._route.navigate(['/checkout']);
}
onclickdelete(item){
  this._cartser.deletecartByID(item).subscribe(
    (data:any[])=>{
      console.log(data);
      this.ngOnInit();
    }
  );
}
onclickstart()
{
  this._route.navigate(['/home']);
}
 onchange(item,i){
       this.total=0;
       console.log(item.c_price);

       console.log(item.c_qty);
       this.tot[i]=item.c_price*this.qty[i];
       console.log(this.tot[i]);
       console.log(this.qty[i]);
       console.log(item)
       this._cartser.updatecart(new changeqty(this.tot[i],this.qty[i],item.c_id)).subscribe(
       (data:any)=>{
        }
      );
}
  ngOnInit() {
    
    this.user_id=localStorage.getItem('email_id');
    this._cartser.getAllcartById(this.user_id).subscribe(
      (data:any)=>{
        if(data.length!=0)
        {
          this.flag=false;
          console.log(this.flag,"11");
          this.flag1=true;
        }
        if(data.length==0)
        {
          this.flag=true;
          console.log(this.flag,"new");
          this.flag1=false;
        }
        for(this.i=0;this.i<data.length;this.i++)
        {
          this.tot[this.i]=data[this.i].c_price;
          this.qty[this.i]=data[this.i].qty;
        }
        this.cartarr=data;
        console.log(this.tot);
        console.log(this.cartarr);
        console.log(this.cartarr);
        for(this.i=0;this.i<=data.length;this.i++){
          this.qty.push(1);
        }

        
      }
    );
    console.log(this.flag);  
  }
  
}
