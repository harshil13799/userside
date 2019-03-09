import { Component,ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product_class } from '../Classes/product';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  //@ViewChild(Slides) slides: Slides;

  p_id:number;
  p_name:string;
  p_price:number;
  p_qty:number;
  fk_cat_id:number;
  p_mfg:string;
  p_img:string;
  buffer_stock:number;
  fk_s_id:number;
  proarr:product_class[]=[];
  i:number=0;
  flag:boolean=false;
  
  constructor(private _actroute:ActivatedRoute,private _route:Router,private _proser:ProductService) { }
  forslider ={
    //spaceBetween:5,
    //centeredSlides:true,
    //slidesPerView:1.3
  }
  sliderConfig={
    spaceBetween:10,
    centeredSlides:true,
    slidesPerView:1.3

  }
  // ionViewDidLoad(){
  //   setTimeout(()=>
  //   this.Slides.startAutoplay()
  // ,1000);
  // }
  ngOnInit() {
    this._proser.getAllproduct().subscribe(
      (data:any)=>{
        this.proarr=data;
        console.log(this.proarr);
      }
    );
  }
}