import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { category_class } from '../Classes/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  cat_id:number;
  cat_name:string;
  catarr:category_class[]=[];
  constructor(private _actroute:ActivatedRoute,private _route:Router,private _catser:CategoryService) { }
  onclickcat(item){
    this._route.navigate(['/categorydetail',item.cat_name]);
  }
  ngOnInit() {
    this._catser.getAllcat().subscribe(
      (data:any)=>{
        this.catarr=data;
        console.log(this.catarr);
      }
    );
  }

}
