import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product_class } from '../Classes/product';
import { Router,ActivatedRoute } from '@angular/router';
import { SortService } from '../services/sort.service';
import { SearchproService } from '../services/searchpro.service';
import { wishlist_class } from '../Classes/wishlist';
import { WishlistService } from '../services/wishlist.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
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
  wishflag:boolean=false;
  wishflag1:boolean=true;
  user_id:string;
  sortarr:product_class[]=[];
  constructor(private _actroute:ActivatedRoute,private _route:Router,private _proser:ProductService,private _sortser:SortService,private _search:SearchproService,private _wishser:WishlistService) { }
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
  onclickwish(item){
    console.log(item,"wishitem");
    this.wishflag=true;
    this.wishflag1=false;
    this.user_id=localStorage.getItem('email_id');
    this._wishser.addtowishlist(new wishlist_class(this.user_id,item.p_id,item.p_name,item.p_img,item.p_mfg,item.fk_cat_id,item.p_price)).subscribe(
      (data:any)=>{
        console.log(data);
      }
    );
  }
  onclickadd(item)
  {
   this._route.navigate(['/productdetail',item.p_id]);
  }
  onclickcart()
  {
    this._route.navigate(['/cart']);
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
