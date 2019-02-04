import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product_class } from '../Classes/product';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.page.html',
  styleUrls: ['./productdetail.page.scss'],
})
export class ProductdetailPage implements OnInit {
  p_id:number;
  p_name:string;
  p_price:number;
  p_qty:number;
  fk_cat_id:number;
  p_mfg:string;
  p_img:string;
  buffer_stock:number;
  fk_s_id:number;
  x:number;
  prodarr:product_class[]=[];
  selectedFile:File=null;
  flag:boolean=false;
  constructor(private _route:Router,private _acroute:ActivatedRoute,private _proser:ProductService) { }
  onclickback(){
    this._route.navigate(['/product']);
  }
  ngOnInit() {
    this.x=this._acroute.snapshot.params['p_id'];
    this._proser.getAllproById(this.x).subscribe(
          (data:any)=>{
          this.prodarr=data;
          console.log(this.prodarr);
       }
     );
  }

}
