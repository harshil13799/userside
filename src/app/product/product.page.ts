import { Component, OnInit, Input} from '@angular/core';
import { ProductService } from '../services/product.service';
import { product_class } from '../Classes/product';

import { Router,ActivatedRoute } from '@angular/router';
import { SortService } from '../services/sort.service';
import { SearchproService } from '../services/searchpro.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  p_id:number;
  searchedItem:string;
  p_name:string;
  p_price:number;
  p_qty:number;
  fk_cat_id:number;
  p_mfg:string;
  p_img:string;
  search:string="hello";
  buffer_stock:number;
  fk_s_id:number;
  proarr:product_class[]=[];
  flag:boolean=false;

   items: product_class[]=[];

  sortarr:product_class[]=[];

  

  constructor(private _actroute:ActivatedRoute,private _route:Router,private _proser:ProductService,private _sortser:SortService,private _search:SearchproService) { }
  changeditems(searchedItem){
    if(searchedItem=="")
    {
      searchedItem=" ";
    }
    console.log(searchedItem);
    this._search.getallsearchpro(searchedItem).subscribe(
      (data:any)=>{
        this.proarr=data;
      }
    );
  }
  
  onclickpro(item)
  {
    this._route.navigate(['/productdetail',item.p_id]);
  }
  onclickfilter(){
    this._route.navigate(['/filterpage']);
  }
  onclickadd(item)
  {
   this._route.navigate(['/productdetail',item.p_id]);
  }
  ongosplash()
  {
    this._route.navigate(['/splash']);
  }
  onclickcart()
  {
    this._route.navigate(['/cart']);
  }


  triggerSearch(searchTerm)
    {
      this._proser.getAllproduct().subscribe(
        (data:any)=>{
          this.proarr=data;
          console.log(this.proarr);
        }
      );       
     }
  onclicksort()
  {
    this._sortser.getallproductINASC().subscribe(
      (data:any)=>{
        this.proarr=data;
      }
    );

  }
  ngOnInit() {
    this._proser.getAllproduct().subscribe(
      (data:any)=>{
        this.proarr=data;
        

        console.log(this.proarr);
      }
    );
  }

}