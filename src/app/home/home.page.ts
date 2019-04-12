import { Component,ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product_class } from '../Classes/product';
import { Router,ActivatedRoute } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  //@ViewChild(Slides) slides: Slides;
  @ViewChild('mySlider', { read: IonSlides }) slides: IonSlides;
  @ViewChild('mySlider1', { read: IonSlides }) slides1: IonSlides;
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
  catproarr:product_class[]=[];
  catproarrforfruits:product_class[]=[];
  i:number=0;
  flag:boolean=false;
  
  constructor(private _actroute:ActivatedRoute,private _route:Router,private _proser:ProductService,) { }
  forslider ={
    spaceBetween:5,
    centeredSlides:true,
    slidesPerView:0.9
  }
  forslider1 ={
    spaceBetween:20,
    centeredSlides:true,
    slidesPerView:1.0
  }

  sliderConfig={
    spaceBetween:0,
    centeredSlides:true,
    slidesPerView:1.8
  }

  slidesDidLoad(slides: IonSlides) {
  slides.startAutoplay();
}

slidesDidLoad1(slides1: IonSlides) {
  slides1.startAutoplay();
}
  oncat(){
    this._proser.getallproBycat('grocery').subscribe(
      (data:any[])=>{
        this.proarr=data;
      }
    );
  }
  onclickCard(item)
  {
    this._route.navigate(['/productdetail',item.p_id]);
  }  
  ngOnInit() {

    this._proser.getAllproduct().subscribe(
      (data:any)=>{
        this.proarr=data;
        console.log(this.proarr);
      }
    );


    this._proser.getallproBycat('Vegetable').subscribe(
      (data:any[])=>{
        this.catproarr=data;
      }
    );


    this._proser.getallproBycat('fruits').subscribe(
      (data:any[])=>{
        this.catproarrforfruits=data;
      }
    );
  }
}