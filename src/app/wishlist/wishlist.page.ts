import { Component, OnInit } from '@angular/core';
import { wishlist_class } from '../Classes/wishlist';
import { WishlistService } from '../services/wishlist.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {
wisharr:wishlist_class[]=[];
user_id:string;
flag:boolean=true;
flag1:boolean=true;

  constructor(private _wishser:WishlistService,private _route:Router) { }
  onclickdelete(item){
    
    this._wishser.deletewishlistByID(item).subscribe(
      (data:any)=>{
        console.log(data);
        this.ngOnInit();
      }
    );
    this.ngOnInit();
  }
  onclickback(){
      this._route.navigate(['/product']);
  }
  ngOnInit() {
    this.user_id=localStorage.getItem('email_id');
    this._wishser.getAllwishlistById(this.user_id).subscribe(
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
        this.wisharr=data;
      }
    );
  }

}
