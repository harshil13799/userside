import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product_class } from '../Classes/product';
import { Router,ActivatedRoute } from '@angular/router';
import { category_class } from '../Classes/category';
import { CategoryService } from '../services/category.service';
import { SearchproService } from '../services/searchpro.service';


@Component({
  selector: 'app-categorydetail',
  templateUrl: './categorydetail.page.html',
  styleUrls: ['./categorydetail.page.scss'],
})
export class CategorydetailPage implements OnInit {
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
  catarr:category_class[]=[];
  delarr:product_class[]=[];
  i:number=0;
  cat_name:string;
  flag:boolean=false;

  constructor(private _actroute:ActivatedRoute,private _route:Router,private _catser:CategoryService,private _search:SearchproService) { }
  onclickback(){
    this._route.navigate(['/category']);
  }

  changeditems(searchedItem){
    this.cat_name=this._actroute.snapshot.params['cat_name'];
    if(searchedItem=="")
    {
      searchedItem=" ";
    }
    console.log(searchedItem);
    this._search.getallsearchprobycat(this.cat_name,searchedItem).subscribe(
      (data:any)=>{
        this.proarr=data;
      }
    );
  }

  onclickpro(item)
  {
    this._route.navigate(['/productdetail',item.p_id]);
  }
  /*applyFilter(filterValue:product_class) 
  {
    this.proarr.filter = filterValue.trim().toLowerCase();
  }*/
  ngOnInit() {
    this.cat_name=this._actroute.snapshot.params['cat_name'];
      this.proarr.splice(0,this.proarr.length);
      this._catser.getallproBycat(this.cat_name).subscribe(
        (data:any[])=>{
          this.proarr=data;
        }
      );
    
  }

}
