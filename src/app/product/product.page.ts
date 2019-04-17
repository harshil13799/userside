import { Component, OnInit, Input} from '@angular/core';
import { ProductService } from '../services/product.service';
import { product_class } from '../Classes/product';
import { Router,ActivatedRoute } from '@angular/router';
import { SortService } from '../services/sort.service';
import { SearchproService } from '../services/searchpro.service';
import { wishlist_class } from '../Classes/wishlist';
import { WishlistService } from '../services/wishlist.service';
import { AlertController } from '@ionic/angular';
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
  wishflag:boolean=false;
  wishflag1:boolean=true;
  user_id:string;
  sortarr:product_class[]=[];

  category:number;
  range:number;
  filterflag:number=0;
  wishid:number[]=[];
  flagno:number=0;
  constructor(private _actroute:ActivatedRoute,private _route:Router,private _proser:ProductService,private _sortser:SortService,private _search:SearchproService,private _wishser:WishlistService,public alertController: AlertController) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Sorry,No Related Products Found',
      buttons: ['OK']
    });
    await alert.present();
    
  }

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
    this.filterflag=1;
    this._route.navigate(['/filterpage']);
  }
  onclickwish(item){
    this.wishid.push(item.p_id);
    console.log(item,"wishitem");
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
        this.flagno=1;
        console.log(this.flagno);





        if(this.flagno==1)
        {
          this.range=this._actroute.snapshot.params['range'];
          this.category=this._actroute.snapshot.params['category'];
          
          console.log(this.category);
          console.log(this.range);
          
          if(this.category==null || this.range==null)
          {
            if(this.range!=null)
            {
            this._sortser.getallfilterrange(this.range).subscribe(
              (data:any)=>{
                this.proarr=data;
                console.log(data);
                if(this.proarr.length==0)
                {
                    this.presentAlert();              
                }
              }
            );
          }
          else if(this.category!=null)
          {
            this._sortser.getallfilterbycat(this.category).subscribe(
              (data:any)=>{
                this.proarr=data;
                console.log(data);
                if(this.proarr.length==0)
                {
                    this.presentAlert();              
                }
              }
            );
          }
        }
        else if(this.category!=null && this.range!=null)
        {
          this._sortser.getallfilterpro(this.category,this.range).subscribe(
            (data:any)=>{
              this.proarr=data;
              console.log(data);
              if(this.proarr.length==0)
              {
                  this.presentAlert();              
              }
            }
          );
        }
      }
      }
    );
  }

}

